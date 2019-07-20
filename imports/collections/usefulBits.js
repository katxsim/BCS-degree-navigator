export const BaseRequirements = {
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
    "replacements": [100, 100, 200] // list of min course levels that can be used to replace an exemption
}