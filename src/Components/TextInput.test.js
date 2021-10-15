const TextInput = require("./TextInput")

// @ponicode
describe("handlePlaintextChange", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Michael", "Anas"], ["Michael", "George", "Anas"], ["Anas", "Pierre Edouard", "Pierre Edouard"]]
        inst = new TextInput.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handlePlaintextChange({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handlePlaintextChange({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handlePlaintextChange({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handlePlaintextChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleCiphertextChange", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Pierre Edouard", "Pierre Edouard"], ["Edmond", "Anas", "Anas"], ["Pierre Edouard", "Jean-Philippe", "George"]]
        inst = new TextInput.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleCiphertextChange({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleCiphertextChange({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleCiphertextChange({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleCiphertextChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
