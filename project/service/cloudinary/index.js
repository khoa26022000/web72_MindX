const cloudinary = require("cloudinary").v2;

const uploadImage = async (file) => {
  const newFileName = `${new Date().getTime()}-${file.name}`;
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: "image",
          filename_override: `${newFileName}`,
          use_filename: true,
          unique_filename: false,
          folder: "foods",
        },
        (err) => reject(err)
      )
      .end(file?.data, () => resolve(newFileName));
  });
};

module.exports = {
  uploadImage,
};
