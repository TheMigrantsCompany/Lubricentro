const QRCode = require('qrcode');

const generateQRCode = async (text) => {
  try {
    const qrCode = await QRCode.toDataURL(text);
    return qrCode;
  } catch (error) {
    throw new Error('Error generating QR code: ' + error.message);
  }
};

module.exports = generateQRCode;