var data = {
    getQuestions: function (req, res, next) {
        let practiceTestName = req.query.name;
        let questionJson = {
            practiceTest1: {
                q1: {
                    text: "what is your name?",
                    options: ['Harsh', 'Pawan', 'Pritam', 'Kapil']
                },
                q2: {
                    text: "what is your hobby?",
                    options: ['Singing', 'Drawing', 'Playing Cricket', 'Watching cartoon']
                }
            },
            practiceTest2: {
                q1: {
                    text: "what is your Age?",
                    options: ['20', '22', '24', '26']
                },
                q2: {
                    text: "what is your Father's name?",
                    options: ['S.S.Gupta', 'Kamal', 'S.R.Gupta', 'Kanahiya']
                }
            }
         } ;
        res.send(questionJson[practiceTestName]);
        return;
    },
    getAnswers: function (req, res, next) {
        let practiceTestName = req.query.name;
        let answerJson = {
            practiceTest1: {
                q1: {
                    ans: "Harsh"
                },
                q2: {
                    ans: "Singing"
                }
            },
            practiceTest2: {
                q1: {
                    ans: "22"
                },
                q2: {
                    ans: "S.S.Gupta"
                }
            }
        };
        res.send(answerJson[practiceTestName]);
        return;
    }
}

module.exports = data;
