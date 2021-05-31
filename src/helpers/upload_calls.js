import axios from 'axios';
import { navigate } from '@reach/router';
import { API_BASE, PRESIGNED_URL, USERS } from './api_calls';
import { fileChecksum } from './file_reader';

/*eslint-disable*/
const createPresignedUrl = async (currentFile, byte_size, checksum) => {
  const file = {
    filename: currentFile.name,
    byte_size,
    checksum,
    content_type: 'application/jpg',
    metadata: {
      message: 'image for parsing',
    },
  };

  const result = await axios
    .post(`${API_BASE}${PRESIGNED_URL}`, { file })
    .then((res) => res.data);

  return result;
};

const createUserSign = async (userInfo, success, failure) => {
  const { username, email, password, password_confirmation, image } = userInfo;

  const checksum = await fileChecksum(image);
  const presignedFileParams = await createPresignedUrl(
    image,
    image.size,
    checksum
  );

  const s3PutOptions = {
    method: 'PUT',
    headers: presignedFileParams.direct_upload.headers,
    body: image,
  };

  const awsRes = await fetch(
    presignedFileParams.direct_upload.url,
    s3PutOptions
  );
  if (awsRes.status !== 200) return awsRes;

  const user = {
    email,
    username,
    password,
    password_confirmation,
    avatar: presignedFileParams.blob_signed_id,
  };

  axios
    .post(
      `${API_BASE}${USERS}`,
      {
        user,
      } // eslint-disable-line
    )
    .then((response) => {
      if (response.data.token && response.data.avatar_url) {
        localStorage.setItem('token', response.data.token);
        success(userInfo);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }
    })
    .catch((error) => failure(error.response));
};

export default createUserSign;
