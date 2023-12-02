var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1000",
        "ok": "853",
        "ko": "147"
    },
    "minResponseTime": {
        "total": "318",
        "ok": "3038",
        "ko": "318"
    },
    "maxResponseTime": {
        "total": "6849",
        "ok": "6849",
        "ko": "1641"
    },
    "meanResponseTime": {
        "total": "4078",
        "ok": "4595",
        "ko": "1079"
    },
    "standardDeviation": {
        "total": "1609",
        "ok": "1086",
        "ko": "466"
    },
    "percentiles1": {
        "total": "3968",
        "ok": "4763",
        "ko": "1295"
    },
    "percentiles2": {
        "total": "5596",
        "ok": "5737",
        "ko": "1430"
    },
    "percentiles3": {
        "total": "6571",
        "ok": "6632",
        "ko": "1557"
    },
    "percentiles4": {
        "total": "6752",
        "ok": "6767",
        "ko": "1626"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 853,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 147,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "142.857",
        "ok": "121.857",
        "ko": "21"
    }
},
contents: {
"req_wait-for-e3503": {
        type: "REQUEST",
        name: "wait for",
path: "wait for",
pathFormatted: "req_wait-for-e3503",
stats: {
    "name": "wait for",
    "numberOfRequests": {
        "total": "1000",
        "ok": "853",
        "ko": "147"
    },
    "minResponseTime": {
        "total": "318",
        "ok": "3038",
        "ko": "318"
    },
    "maxResponseTime": {
        "total": "6849",
        "ok": "6849",
        "ko": "1641"
    },
    "meanResponseTime": {
        "total": "4078",
        "ok": "4595",
        "ko": "1079"
    },
    "standardDeviation": {
        "total": "1609",
        "ok": "1086",
        "ko": "466"
    },
    "percentiles1": {
        "total": "3968",
        "ok": "4763",
        "ko": "1295"
    },
    "percentiles2": {
        "total": "5596",
        "ok": "5737",
        "ko": "1430"
    },
    "percentiles3": {
        "total": "6571",
        "ok": "6632",
        "ko": "1557"
    },
    "percentiles4": {
        "total": "6752",
        "ok": "6767",
        "ko": "1626"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 853,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 147,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "142.857",
        "ok": "121.857",
        "ko": "21"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
