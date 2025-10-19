function calculate50OffTotalPrice(){
    const $repAmountTag = $('#rep-amount');
    let repAmount = parseInt($repAmountTag.text());
    const $dressAmountTag = $('#dress-amount');
    let dressAmount = parseInt($dressAmountTag.text());
    const $tour1989AmountTag = $('#1989-amount');
    let tour1989Amount =  parseInt($tour1989AmountTag.text());

    // I could select all the prices and dow each amount times price and sum them up, but since all prices are 20, I will just do this:
    return repAmount * 20 + dressAmount * 20 + tour1989Amount * 20;
}

function calculate50OffDiscountedPrice(){
    const $repAmountTag = $('#rep-amount');
    let repAmount = parseInt($repAmountTag.text());
    const $dressAmountTag = $('#dress-amount');
    let dressAmount = parseInt($dressAmountTag.text());
    const $tour1989AmountTag = $('#1989-amount');
    let tour1989Amount =  parseInt($tour1989AmountTag.text());

    const totalAmount = repAmount + dressAmount + tour1989Amount;
    const rest = totalAmount % 2;
    const groupsOf2 = (totalAmount - rest) / 2;

    return (groupsOf2 * 20) * 1.75 + rest * 20;
}

function calculate3x2TotalPrice(){
    const $repWhiskey10AmountTag = $('#rep-whiskey-amount');
    let repWhiskey10Amount = parseInt($repWhiskey10AmountTag.text());
    const $streesAmountTag = $('#streets-amount');
    let streesAmount = parseInt($streesAmountTag.text());
    const $evemorePlacesAmountTag = $('#evermore-places-amount');
    let evermorePlaces1989Amount =  parseInt($evemorePlacesAmountTag.text());

    // I could select all the prices and dow each amount times price and sum them up, but since all prices are 20, I will just do this:
    return repWhiskey10Amount * 20 + streesAmount * 20 + evermorePlaces1989Amount * 20;
}

function calculate3X2DiscountedPrice(){
    const $repWhiskey10AmountTag = $('#rep-whiskey-amount');
    let repWhiskey10Amount = parseInt($repWhiskey10AmountTag.text());
    const $streesAmountTag = $('#streets-amount');
    let streesAmount = parseInt($streesAmountTag.text());
    const $evemorePlacesAmountTag = $('#evermore-places-amount');
    let evermorePlaces1989Amount =  parseInt($evemorePlacesAmountTag.text());

    const totalAmount = repWhiskey10Amount + streesAmount + evermorePlaces1989Amount;
    const rest = totalAmount % 3;
    const groupsOf3 = (totalAmount - rest) / 3;

    return groupsOf3 * 40 + rest * 20;
}

function calculate10OffTotalPrice(){
    const $repWhiskeyAmountTag = $('#rep-whiskey-10-amount');
    let repWhiskeyAmount = parseInt($repWhiskeyAmountTag.text());
    const $motelsAmountTag = $('#motels-amount');
    let motelsAmount = parseInt($motelsAmountTag.text());
    const $snakesErasAmountTag = $('#snakes-eras-amount');
    let snakesErasAmount =  parseInt($snakesErasAmountTag.text());

    // I could select all the prices and dow each amount times price and sum them up, but since all prices are 20, I will just do this:
    return repWhiskeyAmount * 20 + motelsAmount * 20 + snakesErasAmount * 20;
}

function calculate10OffDiscountedPrice(){
    const $repWhiskeyAmountTag = $('#rep-whiskey-10-amount');
    let repWhiskeyAmount = parseInt($repWhiskeyAmountTag.text());
    const $motelsAmountTag = $('#motels-amount');
    let motelsAmount = parseInt($motelsAmountTag.text());
    const $snakesErasAmountTag = $('#snakes-eras-amount');
    let snakesErasAmount =  parseInt($snakesErasAmountTag.text());

    const totalAmount = repWhiskeyAmount + motelsAmount + snakesErasAmount;

    return totalAmount >= 15 ? (totalAmount * 20) * 0.9 : totalAmount * 20;
}

function incrementAmountDiscountAndTotal($amountTagName, totalTagName, calculateTotalPrice, discountTagName, calculateDiscount){
    const $amountTag = $($amountTagName);
    let amount = parseInt($amountTag.text());
    amount += 1;
    $amountTag.text(amount);
    const totalPrice = calculateTotalPrice(oldAmount=amount);
    $(totalTagName).text(totalPrice);    
    const discountPrice = calculateDiscount();
    $(discountTagName).text(discountPrice);
}

function decrementAmountDiscountAndTotal($amountTagName, totalTagName, calculateTotalPrice, discountTagName, calculateDiscount){
    const $amountTag = $($amountTagName);
    let amount = parseInt($amountTag.text());
    amount = amount > 0 ? amount - 1 : 0;
    $amountTag.text(amount);
    const totalPrice = calculateTotalPrice(oldAmount=amount);
    $(totalTagName).text(totalPrice);    
    const discountPrice = calculateDiscount();
    $(discountTagName).text(discountPrice);
} 

$(document).ready(() => {
    // 50% off on second item
    $('#rep-minus').on('click', () => {
        decrementAmountDiscountAndTotal('#rep-amount', '#50-total', calculate50OffTotalPrice, '#50-total-discount', calculate50OffDiscountedPrice);
    });
    $('#rep-plus').on('click', () => {  
        incrementAmountDiscountAndTotal('#rep-amount', '#50-total', calculate50OffTotalPrice, '#50-total-discount', calculate50OffDiscountedPrice);
    });
    $('#1989-minus').on('click', () => {
        decrementAmountDiscountAndTotal('#1989-amount', '#50-total', calculate50OffTotalPrice, '#50-total-discount', calculate50OffDiscountedPrice);
    });
    $('#1989-plus').on('click', () => {
        incrementAmountDiscountAndTotal('#1989-amount', '#50-total', calculate50OffTotalPrice, '#50-total-discount', calculate50OffDiscountedPrice);
    });
    $('#dress-minus').on('click', () => {
        decrementAmountDiscountAndTotal('#dress-amount', '#50-total', calculate50OffTotalPrice, '#50-total-discount', calculate50OffDiscountedPrice);
    });
    $('#dress-plus').on('click', () => {
        incrementAmountDiscountAndTotal('#dress-amount', '#50-total', calculate50OffTotalPrice, '#50-total-discount', calculate50OffDiscountedPrice);
    });
    
    // 3x2 on selected items 
    $('#rep-whiskey-minus').on('click', () => {
        decrementAmountDiscountAndTotal('#rep-whiskey-amount', '#3x2-total', calculate3x2TotalPrice, '#3x2-total-discount', calculate3X2DiscountedPrice);
    });
    $('#rep-whiskey-plus').on('click', () => {
        incrementAmountDiscountAndTotal('#rep-whiskey-amount', '#3x2-total', calculate3x2TotalPrice, '#3x2-total-discount', calculate3X2DiscountedPrice);
    });
    $('#streets-minus').on('click', () => {
        decrementAmountDiscountAndTotal('#streets-amount', '#3x2-total', calculate3x2TotalPrice, '#3x2-total-discount', calculate3X2DiscountedPrice);
    });
    $('#streets-plus').on('click', () => {
        incrementAmountDiscountAndTotal('#streets-amount', '#3x2-total', calculate3x2TotalPrice, '#3x2-total-discount', calculate3X2DiscountedPrice);
    });
    $('#evermore-places-minus').on('click', () => {
        decrementAmountDiscountAndTotal('#evermore-places-amount', '#3x2-total', calculate3x2TotalPrice, '#3x2-total-discount', calculate3X2DiscountedPrice);
    });
    $('#evermore-places-plus').on('click', () => {
        incrementAmountDiscountAndTotal('#evermore-places-amount', '#3x2-total', calculate3x2TotalPrice, '#3x2-total-discount', calculate3X2DiscountedPrice);
    });


    // 10% off on buying 10 or more
    $('#rep-whiskey-10-minus').on('click', () => {
        decrementAmountDiscountAndTotal('#rep-whiskey-10-amount', '#10-total', calculate10OffTotalPrice, '#10-total-discount', calculate10OffDiscountedPrice);
    });
    $('#rep-whiskey-10-plus').on('click', () => {
        incrementAmountDiscountAndTotal('#rep-whiskey-10-amount', '#10-total', calculate10OffTotalPrice, '#10-total-discount', calculate10OffDiscountedPrice);
    });
    $('#motels-minus').on('click', () => {
        decrementAmountDiscountAndTotal('#motels-amount', '#10-total', calculate10OffTotalPrice, '#10-total-discount', calculate10OffDiscountedPrice);
    });
    $('#motels-plus').on('click', () => {
        incrementAmountDiscountAndTotal('#motels-amount', '#10-total', calculate10OffTotalPrice, '#10-total-discount', calculate10OffDiscountedPrice);
    });
    $('#snakes-eras-minus').on('click', () => {
        decrementAmountDiscountAndTotal('#snakes-eras-amount', '#10-total', calculate10OffTotalPrice, '#10-total-discount', calculate10OffDiscountedPrice);
    });
    $('#snakes-eras-plus').on('click', () => {
        incrementAmountDiscountAndTotal('#snakes-eras-amount', '#10-total', calculate10OffTotalPrice, '#10-total-discount', calculate10OffDiscountedPrice);
    });

});
