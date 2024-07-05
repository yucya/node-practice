const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

// 静的ファイルを提供する
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    //本番環境ではconsole.logは消すこと！
    console.log(`API Key: ${process.env.OGANE}`);
    console.log(`API Key: ${process.env.API_KEY}`)
});
