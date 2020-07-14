
let recordLog = [];

export function hide(element) {
    element.style.display = "none";
}

export function show(element) {
    element.style.display = "inline";
}

export function handleNewRecord(record) {
    recordLog.push(record);
    console.log("record: " + JSON.stringify(record));
}

export function getFallEvent(event) {
    let fallEvent;
    if (event == "fall") {
        fallEvent = "Fall";
    }
    else if (event == "near fall") {
        fallEvent = "NearFall";
    }
    return fallEvent;
}

export function getFallType(fallType) {
    let fallDescStr;
    switch (fallType) {
        case 1:
            fallDescStr = "Trip";
            break;
        case 2:
            fallDescStr = "Slip";
            break;
        case 3:
            fallDescStr = "Collapse";
            break;
        default:
            fallDescStr = "Other";
    }
    return fallDescStr
}

export function getFallDirection(fallDirection) {
    let fallDirecStr;
    switch (fallDirection) {
        case 1:
            fallDirecStr = "Forewards";
            break;
        case 2:
            fallDirecStr = "Backwards";
            break;
        case 3:
            fallDirecStr = "Leftwards";
            break;
        case 4:
            fallDirecStr = "Rightwards";
            break;
        default:
            fallDirecStr = "Other";
    }
    return fallDirecStr;
}

export function getActivity(activityDesc) {
    let activity;
    switch (activityDesc) {
        case 1:
            activity = "Walk";
            break;
        case 2:
            activity = "Run";
            break;
        case 3:
            activity = "Hike";
            break;
        case 4:
            activity = "Cycle";
            break;
        case 5:
            activity = "Box";
            break;
        case 6:
            activity = "Swim";
            break;
        case 7:
            activity = "Yoga";
            break;
        case 8:
            activity = "Sit";
            break;
        default:
            activity = "Other";
    }
    return activity;
}

export function getLocation(location) {
    let locationStr;
    switch (location) {
        case 1:
            locationStr = "Home";
            break;
        case 2:
            locationStr = "Work";
            break;
        case 3:
            locationStr = "Church";
            break;
        case 4:
            locationStr = "Outside";
            break;
        case 5:
            locationStr = "Store";
            break;
        case 6:
            locationStr = "Gym";
            break;
        case 7:
            locationStr = "School";
            break;
        default:
            activity = "Other";
    }
    return locationStr;
}

export function getEmotion(emotion) {
    let emotionStr;
    switch (emotion) {
        case 1:
            emotionStr = "Happy";
            break;
        case 2:
            emotionStr = "Sad";
            break;
        case 3:
            emotionStr = "Stressed";
            break;
        case 4:
            emotionStr = "Angry";
            break;
        case 5:
            emotionStr = "Anxious";
            break;
        case 6:
            emotionStr = "Upset";
            break;
        default:
            emotionStr = "Other";
    }
    return emotionStr;
}

//export function handleNewRecord(record) {
//    recordLog.push(record);
//    console.log(record);
//}

//export function handleFallBtn() {
//    evt = "fall";
//    console.log(evt);
//    hide(fallTypeList);
//}

//export function handleNearFallBtn() {
//    evt = "near fall";
//    fallTypeList.style.display = "inline";
//}

//export function handleWalkBtn() {
//    activityDesc = "walking";
//    if (exercise.state === "started") {
//        activityEndConfirm_popup.style.display = "inline";
//    }
//    if (exercise.state === "stopped") {
//        activityBeginConfirm_popup.style.display = "inline";
//    }
//}

//export function handleTripBtn() {
//    fallType = 1;
//    fallTypeList.style.display = "none";
//    fallDescList.style.display = "inline";
//}

//export function handleForeBtn() {
//    fallDirection = 1;
//    fallDescList.style.display = "none";
//    fallConfirm.style.display = "inline";
//}

//export function handleYesBtn(type) {
//    var timeStamp = new Date();
//    var time = timeStamp.toJSON();
//    let record = new Record();
//    record.time = time;
//    if (type == "fallConfirm") {
//        if (evt == "fall") {
//            record.event = "Fall";
//        }
//        else if (evt == "near fall") {
//            record.event = "NearFall";
//        }
//        let fallDesc = new FallDesc();
//        switch (fallType) {
//            case 1:
//                fallDesc.type = "Trip";
//                break;
//            case 2:
//                fallDesc.type = "Slip";
//                break;
//            case 3:
//                fallDesc.type = "Collapse";
//                break;
//            default:
//                fallDesc.type = "None";
//        }
//        switch (fallDirection) {
//            case 1:
//                fallDesc.direction = "Forewards";
//                break;
//            case 2:
//                fallDesc.direction = "Backwards";
//                break;
//            case 3:
//                fallDesc.direction = "Leftwards";
//                break;
//            case 4:
//                fallDesc.direction = "Rightwards";
//                break;
//            default:
//                fallDesc.direction = "None";
//        }
//        record.desc = fallDesc;
//        console.log(record + "(record hasn't been pushed yet)");
//        handleNewRecord(record);
//        fallConfirm.style.display = "none";
//    }
//    switch (activityDesc) {
//        case 1:
//            record.desc = "Walk";
//            break;
//        case 2:
//            record.desc = "Run";
//            break;
//        case 3:
//            record.desc = "Hike";
//            break;
//        case 4:
//            record.desc = "Cycle";
//            break;
//        default:
//            record.desc = "Other";
//    }
//    if (type == "activityBeginConfirm") {
//        record.event = "Activity";
//        record.desc = record.desc + ":Begin";
//        handleNewRecord(record);
//        myClock.style.display = "inline";
//        exercise.start();
//        activityBeginConfirm_popup.style.display = "none";
//    }
//    if (type == "activityEndConfirm") {
//        record.event = "Activity";
//        record.desc = record.desc + ":End";
//        handleNewRecord(record);
//        exercise.stop();
//        myClock.style.display = "none";
//        activityEndConfirm_popup.style.display = "none";
//    }

//    //if (type == "locationConfirm") {
//    //    record.event = "Location";
//    //}
//    //if (type == "emotionConfirm") {
//    //    record.event = "Emotion";
//    //}

//}

//export function handleNoBtn(type) {
//    if (type == "fallConfirm") {
//        fallConfirm.style.display = "none";
//    }
//    if (type == "activityBeginConfirm") {
//        activityBeginConfirm_popup.style.display = "none";
//    }
//    if (type == "activityEndConfirm") {
//        activityEndConfirm_popup.style.display = "none";
//    }
//}