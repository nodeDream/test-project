const expresss = require('express');
const app = expresss();

// Routes
app.use('/', require('./routes/index'));


const PORT = process.env.PORT || 5070;

app.listen(PORT, console.log(`Server started on port ${PORT}`))
