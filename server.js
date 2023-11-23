// Rota para redirecionar para a página específica da clínica após o login
app.get('/views/table_clinic1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'table_clinic1.ejs'));
});
