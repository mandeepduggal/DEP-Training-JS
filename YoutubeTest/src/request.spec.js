describe("Testing 'GetRequestData'", () => {

    let promisedData;
    beforeEach(function() {
        promisedData = "{}";
    });


    it("check function call", () => {
        spyOn(window, "fetch").and.returnValue(Promise.resolve(promisedData));
        spyOn(window, "getQuery");
        let result = GetRequestData();
        expect(getQuery).toHaveBeenCalled();
        expect(fetch).toHaveBeenCalled();
        expect(responseObject).toEqual({});

    });



});


describe("Testing 'storeRequest'", () => {
    let data;
    beforeEach(function() {
        data = { 'items': ['1', '2', '3'] };
    });
    it("check function call", () => {
        spyOn(window, "mainCardView");
        spyOn(window, "setAblityOfButton");
        let result = storeResponse(data);
        expect(mainCardView).toHaveBeenCalled();

    });
});