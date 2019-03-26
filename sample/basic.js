json = {
    name: "Panna",
    age: 28,
    projects: ["yesbank", "Mck", "spicejet"],
    profile: {
        designation: "Consultant",
        exp: 3,
    },
    background: null,
    status: false
}

schema = {
    meta: {
        label: "root",
        types: [{}],
        objChk:{
            lengthCheck: (len) => { return len < 10 }
        }
    },
    data: {
        name: {
            meta: {
                label: "name",
                types: [""],
                check: (name) => { return name === "Panna" }
            }
        },
        age: {
            meta: {
                label: "age",
                types: [1],
                check: (age) => { return name > 20 }
            }
        },
        background: {
            meta: {
                label: "background",
                types: [true],
                check: true
            }
        },
        status: {
            meta: {
                label: "status",
                types: [null],
                check: true
            }
        },
        projects: {
            meta: {
                label: "projects",
                types: ["", 1, true, {}],
                check: (name) => { return name === "Panna" },
                objChk: {
                    meta: {
                        lbl: "proj",
                        type: {},
                        lengthCheck: (len) => { return len === 0 }
                    }
                }
            }
        },
    }
}