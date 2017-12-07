var data = {
    getQuestions: function(req,res, next) {
        let questionJson = {
            name: 'Harsh khandelwal'
        };
        res.send(questionJson);
        return;
    }
}

module.exports = data;
