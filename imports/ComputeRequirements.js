


function getFreshRequirements() {
    return {
        "core":
        {
            CPSC: [
                { "num": 110, "status": "incomplete" },
                { "num": 121, "status": "incomplete" },
                { "num": 210, "status": "incomplete" },
                { "num": 221, "status": "incomplete" },
                { "num": 213, "status": "incomplete" },
                { "num": 310, "status": "incomplete" },
                { "num": 313, "status": "incomplete" },
                { "num": 320, "status": "incomplete" }
            ],
            "ENGL": "incomplete",
            "MATH": "incomplete",
            "STAT": "incomplete",
            "COMM": "incomplete",
            "counter": 0
        },
        "elective": [0, 0], // elective[0] is 300 < num <400 completed
        "bridging": { "CPSC": 0, "OTHER": 0 },
        "replacements": [] // list of min course levels that can be used to replace an exemption
    };
}

function getExemptionCount(user, requirements) {
    let exemptions = Object.values(user.courses).filter(course => course.type === "exemptions");
    exemptions.forEach(exemption => {
        let courseLevel = Math.floor(exemption.num / 100) * 100;

        // add course level of course replacement required 
        requirements.replacements.push(courseLevel);
    })
}
// return a user object with updated requirements object 
export function updateRequirements(user) {
    // first set up number of courses needed to exempt
    const requirements = getFreshRequirements();
    getExemptionCount(user, requirements);

    // iterate over courses and check off requirements
    Object.values(user.courses).forEach(function (course) {
        switch (course.type) {
            case "core":
                switch (course.dept) {
                    case "CPSC":
                        switch (course.num) {
                            case 110:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 110) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                return;
                            case 121:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 121) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                return;
                            case 210:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 210) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                return;
                            case 221:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 221) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                return;
                            case 213:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 213) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                return;
                            case 310:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 310) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                return;
                            case 313:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 313) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                return;
                            case 320:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 320) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                return;
                        }
                        return;

                    case "ENGL":
                        if (course.num > 100) {
                            requirements.core.ENGL = "complete"
                            requirements.core.counter++;
                        }

                        return;
                    case "MATH":
                        // console.log(course.dept + course.num);
                        if (course.num == 180) {
                            requirements.core.MATH = "complete"
                            requirements.core.counter++;
                        }
                        return;
                    case "STAT":
                        if (course.num == 203) {
                            requirements.core.STAT = "complete"
                            requirements.core.counter++;
                        }
                        return;
                    default:
                        if (
                            course.dept === "ENGL" ||
                            course.dept === "COMM" ||
                            course.dept === "SCIE" ||
                            course.dept === "BUSI" &&
                            course.num >= 300) {
                            requirements.core.COMM = "complete"
                            requirements.core.counter++;
                        }
                        return;
                }

            case "exemptions":
                switch (course.dept) {
                    case "CPSC":
                        switch (course.num) {
                            case 110:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 110) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                return;
                            case 121:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 121) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                return;
                            case 210:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 210) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                return;
                            case 221:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 221) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                return;
                            case 213:
                                requirements.core.CPSC.forEach(function (coreCS) {
                                    if (coreCS.num == 213) {
                                        coreCS.status = "complete"
                                        requirements.core.counter++;
                                    }
                                })
                                console.log("should not have made it here " + course.dept + " " + course.num);
                                return;
                        }
                    case "ENGL": if (course.num > 100) {
                        requirements.core.ENGL = "complete"
                        requirements.core.counter++;
                    }
                        return;
                    case "MATH": if (course.num === 180) {
                        requirements.core.MATH = "complete"
                        requirements.core.counter++;
                    }
                        return;
                    case "STAT": if (course.num === 200 || course.num === 203) {
                        requirements.core.STAT = "complete"
                        requirements.core.counter++;
                    }
                        return;
                    default: if (course.num >= 300) {
                        requirements.core.COMM = "complete"
                        requirements.core.counter++;
                    }
                        return;
                }

            case "electives":
                switch (course.dept == "CPSC") {
                    case (course.num < 300):
                        // Should seriously never get here 
                        console.log("you found an easter egg!")
                        return;
                    case (course.num < 400 &&
                        course.num !== 310 &&
                        course.num !== 313 &&
                        course.num !== 320):
                        if (requirements.elective[0] < 3) {
                            requirements.elective[0]++;
                        }
                        return;
                    default:
                        if (!course.consumed) {
                            requirements.elective[1]++;
                            course.consumed = true;
                        }
                        return;
                }

            case "bridging":
                if (
                    course.dept == "CPSC" &&
                    course.num >= 300 &&
                    requirements.bridging.CPSC <= 2) {
                    requirements.bridging.CPSC++;
                } else if (
                    course.num >= 300 &&
                    requirements.bridging.OTHER <= 3) {
                    requirements.bridging.OTHER++;
                }
                return;

            case "replacement":
                let courseLevel = Math.floor(course.num / 100) * 100;
                // remove highest possible replacement level
                if (requirements.replacements.includes(courseLevel)) {
                    requirements.replacements.splice(
                        requirements.replacements.indexOf(courseLevel), 1);
                    return;
                } else if
                    // replacement is higher level than needed (surpassing the requirement)
                    (Math.max(...requirements.replacements) <= courseLevel) {
                    requirements.replacements.splice(
                        requirements.replacements.indexOf(Math.max(...requirements.replacements)), 1);
                    // console.log("used " + course.dept + " " + course.num + " for an exemption replacement");
                    return;
                } else { // course num must be too low to quailify
                    console.log(course.dept + " " + course.num + " was not a valid exemption replacement");
                }
                return;
        } // end switch on course.type
    })

    // return the \~~$$money$$~~/ here
    return requirements;
} 
