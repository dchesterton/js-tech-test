import {mergeEventData} from './util';

it('merges event data with markets and outcomes data', () => {
    const event = {"eventId":21249939,"name":"Shanghai Shenhua 0 v 0 Shandong Luneng Taishan","displayOrder":-1000,"sort":"MTCH","linkedEventId":21228740,"classId":5,"className":"Football","typeId":10003971,"typeName":"Football Live","linkedEventTypeId":10005942,"linkedEventTypeName":"Chinese Super League","startTime":"2017-09-19T11:35:23.000Z","scores":{"home":0,"away":0},"competitors":[{"name":"Shanghai Shenhua","position":"home"},{"name":"Shandong Luneng Taishan","position":"away"}],"status":{"active":true,"started":true,"live":true,"resulted":false,"finished":false,"cashoutable":true,"displayable":true,"suspended":false,"requestabet":false},"boostCount":0,"superBoostCount":0};

    const markets = {
        "21249939":[
            {"marketId":93649836,"eventId":21249939,"name":"Full Time Result","displayOrder":-32701,"type":"win-draw-win","status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":true,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":5000},"spAvail":false},
            {"marketId":93768039,"eventId":21249939,"name":"Next Goalscorer","displayOrder":-32656,"type":"standard","status":{"index":1,"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":false,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":2000},"spAvail":false},
            {"marketId":93649441,"eventId":21249939,"name":"Next Team To Score","displayOrder":-32601,"type":"standard","status":{"index":1,"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":true,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":2500},"spAvail":false},
            {"marketId":93649795,"eventId":21249939,"name":"Under/Over 0.5 Goals","displayOrder":-32571,"lineValue":"0.5","type":"standard","status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":false,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":5000},"spAvail":false},
            {"marketId":93649800,"eventId":21249939,"name":"Under/Over 1.5 Goals","displayOrder":-32570,"lineValue":"1.5","type":"standard","status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":true,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":5000},"spAvail":false},
        ]
    };

    const outcomes = {
        "93649441":[
            {"outcomeId":367529141,"marketId":93649441,"eventId":21249939,"name":"No Score","result":{"place":0,"result":"-","favourite":false},"price":{"decimal":"7","num":"6","den":"1"},"status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":true,"result":"-"},"displayOrder":0},
            {"outcomeId":367529124,"marketId":93649441,"eventId":21249939,"name":"Shanghai Shenhua","displayOrder":1,"result":{"place":0,"result":"-","favourite":false},"price":{"decimal":"1.57","num":"4","den":"7"},"status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":true,"result":"-"}},
            {"outcomeId":367529134,"marketId":93649441,"eventId":21249939,"name":"Shandong Luneng Taishan","displayOrder":2000,"result":{"place":0,"result":"-","favourite":false},"price":{"decimal":"1.167","num":"1","den":"6"},"status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":true,"result":"-"}}
        ],
        "93649795":[
            {"outcomeId":367530340,"marketId":93649795,"eventId":21249939,"name":"Under","displayOrder":10,"result":{"place":0,"result":"-","favourite":false},"linkedOutcomeId":367657864,"type":"under","price":{"decimal":"4.5","num":"7","den":"2"},"status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":false,"result":"-"}},
            {"outcomeId":367530346,"marketId":93649795,"eventId":21249939,"name":"Over","displayOrder":20,"result":{"place":0,"result":"-","favourite":false},"linkedOutcomeId":367657865,"type":"over","price":{"decimal":"2.25","num":"5","den":"4"},"status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":false,"result":"-"}}
        ],
        "93649800":[
            {"outcomeId":367530357,"marketId":93649800,"eventId":21249939,"name":"Under","displayOrder":10,"result":{"place":0,"result":"-","favourite":false},"linkedOutcomeId":367657866,"type":"under","price":{"decimal":"1.007","num":"1","den":"150"},"status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":true,"result":"-"}},
            {"outcomeId":367530360,"marketId":93649800,"eventId":21249939,"name":"Over","displayOrder":20,"result":{"place":0,"result":"-","favourite":false},"linkedOutcomeId":367657867,"type":"over","price":{"decimal":"2.25","num":"5","den":"4"},"status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":true,"result":"-"}}
        ],
        "93649836":[
            {"outcomeId":367530464,"marketId":93649836,"eventId":21249939,"name":"Shanghai Shenhua","displayOrder":10,"result":{"place":0,"result":"-","favourite":false},"linkedOutcomeId":367530511,"type":"home","price":{"decimal":"1.11","num":"1","den":"9"},"status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":true,"result":"-"}},
            {"outcomeId":367530471,"marketId":93649836,"eventId":21249939,"name":"Draw","displayOrder":20,"result":{"place":0,"result":"-","favourite":false},"linkedOutcomeId":367530517,"type":"draw","price":{"decimal":"21","num":"20","den":"1"},"status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":true,"result":"-"}},
            {"outcomeId":367530477,"marketId":93649836,"eventId":21249939,"name":"Shandong Luneng Taishan","displayOrder":30,"result":{"place":0,"result":"-","favourite":false},"linkedOutcomeId":367530524,"type":"away","price":{"decimal":"1.08","num":"1","den":"12"},"status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":true,"result":"-"}}
        ],
        "93768039":[
            {"outcomeId":368054082,"marketId":93768039,"eventId":21249939,"name":"Zheng Cong","displayOrder":1,"result":{"place":0,"result":"-","favourite":false},"price":{"decimal":"1.167","num":"1","den":"6"},"status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":true,"result":"-"}},
            {"outcomeId":368054079,"marketId":93768039,"eventId":21249939,"name":"Yunding Cao","displayOrder":1,"result":{"place":0,"result":"-","favourite":false},"price":{"decimal":"2.2","num":"6","den":"5"},"status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":true,"result":"-"}},
            {"outcomeId":368054067,"marketId":93768039,"eventId":21249939,"name":"Shilin Sun","displayOrder":1,"result":{"place":0,"result":"-","favourite":false},"price":{"decimal":"1.05","num":"1","den":"20"},"status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":true,"result":"-"}},
            {"outcomeId":368054055,"marketId":93768039,"eventId":21249939,"name":"Lin Wang","displayOrder":1,"result":{"place":0,"result":"-","favourite":false},"price":{"decimal":"1.04","num":"1","den":"25"},"status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":true,"result":"-"}},
            {"outcomeId":368054053,"marketId":93768039,"eventId":21249939,"name":"Kee-Hee Kim","displayOrder":1,"result":{"place":0,"result":"-","favourite":false},"price":{"decimal":"2.75","num":"7","den":"4"},"status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":false,"result":"-"}}
        ]
    };

    const merged = mergeEventData(event, markets, outcomes);

    expect(merged.markets).toEqual(markets[event.eventId]);

    merged.markets.map(market => {
        expect(market.outcomes).toEqual(outcomes[market.marketId]);
    });
});
