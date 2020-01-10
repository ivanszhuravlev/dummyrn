export const readBlob = blob => {
  try {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = event => resolve(event);
    });
  } catch (error) {
    console.warn(error);
  }
};
