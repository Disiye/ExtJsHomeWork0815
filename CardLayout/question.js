
var questionOne = new Ext.form.FieldSet({
    title: 'Garbage Classification Question One',
    items: [
        {
            xtype: 'label',
            html: '<b> Q1:番茄酱属于以下哪种垃圾？（单选）</b>',
            style: 'margin: 0 0 0 20;',
        },
        {
            xtype: 'radiogroup',
            id: 'questionOne',
            style: 'margin: 20 0 0 0;',
            vertical: true,
            columns: 1,
            items: [
                {
                    boxLabel: '湿垃圾',
                    name: 'question-one',
                    inputValue: 0,
                }, {
                    boxLabel: '干垃圾',
                    name: 'question-one',
                    inputValue: 1,
                }, {
                    boxLabel: '有害垃圾',
                    name: 'question-one',
                    inputValue: 2,
                }, {
                    boxLabel: '可回收物',
                    name: 'question-one',
                    inputValue: 3,
                }
            ]
        }
    ]
});

var questionFifty = new Ext.form.FieldSet({
    title: 'Garbage Classification Question Fifty',
    defaultType: 'checkbox',
    id: 'questionFifty',
    items: [
        {
            xtype: 'label',
            html: '<b> Q50:王大叔出门遛狗后，哪些是正确处理狗粑粑的方法？（多选）</b>',
            style: 'margin: 0 0 0 20;',
        },
        {
            style: 'margin: 20 0 0 0;',
            boxLabel: '把粑粑用废报纸包好带回家冲掉',
            name: 'question-fifty',
            inputValue: 0
        }, {
            boxLabel: '受污染的报纸按有害垃圾处理',
            name: 'question-fifty',
            inputValue: 1
        }, {
            boxLabel: '没受污染的报纸按可回收垃圾处理',
            name: 'question-fifty',
            inputValue: 2
        }, {
            boxLabel: '受污染的报纸浸水后当湿垃圾处理',
            name: 'question-fifty',
            inputValue: 3
        }]
});


var questionOneResult = new Ext.form.FieldSet({
    title: 'Garbage Classification Question One',
    items: [
        {
            xtype: 'label',
            html: '<b> Q1:番茄酱属于以下哪种垃圾？（单选）</b>',
            style: 'margin: 0 0 0 20;',
        },
        {
            xtype: 'radiogroup',
            id: 'questionOneAnswer',
            style: 'margin: 20 0 0 0;',
            vertical: true,
            columns: 1,
            items: [
                {
                    id: 'wetGarbage',
                    boxLabel: '湿垃圾',
                    name: 'question-one-answer',
                    inputValue: 0,
                }, {
                    id: 'dryGarbage',
                    boxLabel: '干垃圾',
                    name: 'question-one-answer',
                    inputValue: 1,
                }, {
                    id: 'hazardousWaste',
                    boxLabel: '有害垃圾',
                    name: 'question-one-answer',
                    inputValue: 2,
                }, {
                    id: 'recycling',
                    boxLabel: '可回收物',
                    name: 'question-one-answer',
                    inputValue: 3,
                }
            ]
        }
    ]
});

var questionFiftyResult = new Ext.form.FieldSet({
    title: 'Garbage Classification Question Fifty',
    defaultType: 'checkbox',
    id: 'questionFiftyAnswer',
    items: [
        {
            xtype: 'label',
            html: '<b> Q50:王大叔出门遛狗后，哪些是正确处理狗粑粑的方法？（多选）</b>',
            style: 'margin: 0 0 0 20;',
        },
        {
            style: 'margin: 20 0 0 0;',
            boxLabel: '把粑粑用废报纸包好带回家冲掉',
            name: 'question-fifty',
            inputValue: 0
        }, {
            boxLabel: '受污染的报纸按有害垃圾处理',
            name: 'question-fifty',
            inputValue: 1
        }, {
            boxLabel: '没受污染的报纸按可回收垃圾处理',
            name: 'question-fifty',
            inputValue: 2
        }, {
            boxLabel: '受污染的报纸浸水后当湿垃圾处理',
            name: 'question-fifty',
            inputValue: 3
        }]
});

function setQuestionOneAnswer() {
    Ext.getCmp('questionOneAnswer').reset();
    let radioValue = Ext.getCmp('questionOne').getValue();
    if(radioValue != null){
        Ext.getCmp('questionOneAnswer').setValue(radioValue.inputValue);
    }

    // if (inputValue === 0) {
    //     Ext.getCmp('wetGarbage').setValue(true);
    // }
    // if (inputValue === 1) {
    //     Ext.getCmp('dryGarbage').setValue(true);
    // }
    // if (inputValue === 2) {
    //     Ext.getCmp('hazardousWaste').setValue(true);
    // }
    // if (inputValue === 3) {
    //     Ext.getCmp('recycling').setValue(true);
    // }
}

function setQuestionFiftyAnswer() {
    const questionFifty = Ext.getCmp('questionFifty').items;
    const questionFiftyAnswer = Ext.getCmp('questionFiftyAnswer');
    for (let i = 1; i < questionFifty.length; i++) {
        if (questionFifty.get(i).checked) {
            questionFiftyAnswer.items.items[i].setValue(true);
        }else{
            questionFiftyAnswer.items.items[i].setValue(false);
        }
    }
}