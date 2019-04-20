const keys = require('../../config/keys');

module.exports = ({ id, body }) => {
  return `
    <html>
      <body>
        <div style="text-align: center; color: black;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${id}/yes">Yes</a>
            <a href="${keys.redirectDomain}/api/surveys/${id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
