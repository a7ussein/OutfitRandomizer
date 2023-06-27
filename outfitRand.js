// The project was created on the CodeHs IDE
/*
* Coded by: 
*       Student1 = Ahmed Hussein
*       Student2 = Honora White
*/

// Variables Init 
var clothingChoice;
var weather;
var ColorsArray;
var topColor;
var bottomColor;

/*
*Coded by AH & HW
*Prompt user for clothing choice and weather
*/
function prompt(){
    clothingChoice = readLine("Clothing Choice Prefered? Male/Female/etc");
    weather = readLine("what is the weather today? Sunny/Cold/Rainy/Windy/Snowy.");
    println("click for more random outfits");
    return clothingChoice;
    return weather;
}

// Coded by HW
// Function to randomley select colors from a color array 
function RandomizeColors(){
    ColorsArray = ["red", "green", "yellow", "orange","white", "gray", "purple" , "black"];
    topColor = ColorsArray[Randomizer.nextInt(0, ColorsArray.length - 1)];
    bottomColor = ColorsArray[Randomizer.nextInt(0, ColorsArray.length - 1)];
    return ColorsArray;
    return topColor;
    return bottomColor;
}

// Coded by AH
// Randomize outfit function generates a random top and a random bottom
function randomizeOutfit(topsArray, bottomsArray){
        var topPicker = Randomizer.nextInt(0, topsArray.length -1);
        var randomTop = topsArray[topPicker];
        var top = new Text(randomTop);
        top.setPosition(10, 130);
        top.setColor(Color.white);
        add(top);
        var bottomPicker = Randomizer.nextInt(0, bottomsArray.length -1);
        var randomBottom = bottomsArray[bottomPicker];
        var bottom = new Text(randomBottom);
        bottom.setPosition(10, 370);
        bottom.setColor(Color.black)
        bottom.setColor(Color.white);
        add(bottom);
        println("Your random outfit for the day is a " + topColor + " " + randomTop + " and a " + bottomColor + " " + randomBottom + "!");
        }


// Functions to get outfit based on gender and weather


//Male function -- AH
function generateMaleOutfit(weather){
    if (weather == "Sunny" || weather == "sunny" || weather == "warm" || weather == "Warm") {
        randomizeOutfit(maleWarmTops, maleWarmBottoms);
    } else if (weather == "Cold" || weather == "cold" || weather == "cool" || weather == "Cold" ) {
        randomizeOutfit(maleColdTops, maleColdBottoms);
    } else if (weather == "Rainy" || weather == "rainy" ) {
        randomizeOutfit(maleRainyTops, maleRainyBottoms);
    } else if (weather == "Windy" || weather == "windy" ) {
        randomizeOutfit(maleWindyTops, maleWindyBottoms);
    } else if (weather == "Snowy" || weather == "snowy" ) {
        randomizeOutfit(maleSnowyTops, maleSnowyBottoms);
    }else{
        alert("invalid input");
    }
}

// Female Function -- HW
function generateFemaleOutfit(weather){
    if (weather == "Sunny" || weather == "sunny" || weather == "warm" || weather == "Warm") {
        randomizeOutfit(femaleWarmTops, femaleWarmBottoms);
    } else if (weather == "Cold" || weather == "cold" || weather == "cool" || weather == "Cold" ) {
        randomizeOutfit(femaleColdTops, femaleColdBottoms);
    } else if (weather == "Rainy" || weather == "rainy" ) {
        randomizeOutfit(femaleRainyTops, femaleRainyBottoms);
    } else if (weather == "Windy" || weather == "windy" ) {
        randomizeOutfit(femaleWindyTops, femaleWindyBottoms);
    } else if (weather == "Snowy" || weather == "snowy" ) {
        randomizeOutfit(femaleSnowyTops, femaleSnowyBottoms);
    }else{
        alert("invalid input");
    }
}

// Others function AH&HW
function generateRandomOutfitForOthers(weather){
    var random = Randomizer.nextInt(1,2);
    if(random == 1){
        generateMaleOutfit(weather);
    }else{
        generateFemaleOutfit(weather);
    }
}

// function to display the title Outfit Randomizer on the canvas  -- HW
function displayTitle(){
    var titleBorder = new Rectangle(170, 30);
    titleBorder.setPosition(0,5);
    titleBorder.setColor(Color.black);
    add(titleBorder);
    
    var title = new Text("Outfit Randomizer:", "15pt arial");
    title.setPosition(0, 25);
    title.setColor(Color.cyan);
    add(title);

}

//Some graphics to make it look good -- AH
function displayGraphics(){
    var topBigRect = new Rectangle(getWidth(), getHeight()/2);
    topBigRect.setPosition(0,0);
    topBigRect.setColor(topColor);
    add(topBigRect);
    
    var topSmallRect = new Rectangle(getWidth() ,100);
    topSmallRect.setPosition(0, 70);
    topSmallRect.setColor(Color.black);
    add(topSmallRect);
    
    var topIdentifier = new Text("Top: ", "12pt arial");
    topIdentifier.setPosition(0,90);
    topIdentifier.setColor(Color.white);
    add(topIdentifier);
    
    
    var bottomBigRect = new Rectangle(getWidth(), getHeight()/2);
    bottomBigRect.setPosition(0, getHeight()/2);
    bottomBigRect.setColor(bottomColor);
    add(bottomBigRect)
    
    var bottomSmallRect = new Rectangle(getWidth() ,100);
    bottomSmallRect.setPosition(0, 310);
    bottomSmallRect.setColor(Color.black);
    add(bottomSmallRect);
    
    var bottomIdentifier = new Text("Bottom: ", "12pt arial");
    bottomIdentifier.setPosition(0,330);
    bottomIdentifier.setColor(Color.white);
    add(bottomIdentifier);
    
    var clickToChangeBackground = new Rectangle(310, 40);
    clickToChangeBackground.setPosition(40, getHeight() - 45);
    clickToChangeBackground.setColor(Color.white);
    add(clickToChangeBackground);
    
    var clickToChange = new Text("Click to change your random outfit" , "15pt arial");
    clickToChange.setPosition(40, getHeight() - 20);
    clickToChange.setColor(Color.black);
    add(clickToChange);
}

// generateOutfits is the function that displays the graphics and generates the random outfits -- AH & HW
function generateOutfits(){
    RandomizeColors();
    displayGraphics();
    displayTitle();
    if (clothingChoice == "m" || clothingChoice == "M" || clothingChoice == "male" || clothingChoice == "Male") {
        generateMaleOutfit(weather);
    }else if(clothingChoice == "f" || clothingChoice == "F" || clothingChoice == "female" || clothingChoice == "Female"){
       generateFemaleOutfit(weather);
    }else{
        generateRandomOutfitForOthers(weather);
    }
}

// The start() function is where everything is put together -- AH & HW
function start(){
    prompt();
    generateOutfits();
    mouseClickMethod(generateOutfits);
}

//_____________________________
//DATABASE
/*
* Generated By AH & HW
*/

/* CITATIONS:
* https://www.townandcountrymag.com/style/mens-fashion/g816/mens-summer-shirts/
* https://www.esquire.com/mens-summer-fashion/
* https://www.pinterest.com/akiannuzzi/warm-weather-outfits/
*
*
*
*/
var maleWarmTops = ["Polo shirt","T-shirt","short sleve shirt", "Tank top", "Hawaiian Shirt",
  "Classic Polo", " Button Down Shirt", "Short-sleeved button up", "Closet Staple",
  "Sporty Shirt", "Custom Fit", "Sleeveless shirt", "Crop top", "Seersucker shirt",
  "Muscle shirt", "V-neck shirt", "Muscle tank", "Basketball jersey", "Football jersey", "Basketball tank",
  "Pullover hoodie", "Zip-up hoodie", "Running shirt", "Workout tank"]; //AH

var maleWarmBottoms = ["Shorts","Chino shorts","Denim shorts","Cargo shorts","Board shorts",
    "Swim trunks","Running shorts","Gym shorts","Basketball shorts","Jogger shorts",
    "Bermuda shorts","Linen shorts","Cotton shorts","Cargo pants","Khaki shorts",
    "Seersucker shorts","Hiking shorts","Track pants"]; //AH

// Female warm weather clothing options

var femaleWarmTops = ["Tank Top","Button-Up Shirt","Crop Top","Tunic Top","Sleeveless Blouse"
    ,"Wrap Blouse","Linen Shirt","T-Shirt","Boho Top","Mesh Top","Crochet Top","Tie-Dye Top","Cutout Top",
    "Lace Trim Top","Babydoll Top","Bell Sleeve Top","Chiffon Blouse","Graphic Tee","Oversized Tee","Polo Shirt"]; // HW
    
var femaleWarmBottoms = ["Denim Shorts","Bermuda Shorts","Track Pants","Flowy Skirt","Midi Skirt","Pencil Skirt",
    "Mini Skirt","Bike Shorts","Sweat Shorts","Joggers","Leggings","Yoga Pants","High-Waisted Jeans","Skinny Jeans", 
    "Flare Jeans","Cropped Jeans","Boyfriend Jeans","Drawstring Pants","Linen Shorts"];//HW

// Male cold weather clothing options

var maleColdTops = ["Sweater", "Cardigan", "Turtleneck", "Flannel shirt", "Crew neck sweatshirt",
  "Hoodie", "Denim jacket", "Leather jacket", "Bomber jacket", "Peacoat",
  "Parka", "Trench coat", "Puffer vest", "Quilted jacket", "Wool coat"]; //AH
  
var maleColdBottoms = ["Jeans", "Corduroys", "Chinos", "Khakis", "Wool trousers",
  "Flannel pants", "Cargo pants", "Fleece joggers", "Sweatpants", "Track pants",
  "Wool pants", "Twill pants", "Cuffed pants", "Pleated pants", "Dress pants",
  "Overalls", "Ski pants", "Rain pants", "Snow pants", "Leather pants",
  "Fleece-lined jeans", "Cotton joggers", "Wool joggers", "Denim shorts", "Cargo shorts",
  "Board shorts", "Khaki shorts", "Sweatshorts", "Pleated shorts", "Bermuda shorts",
  "Hiking pants", "Convertible pants", "Corduroy shorts", "Fleece-lined chinos", "Wool shorts",
  "Sweatpants with pockets", "Fleece-lined sweatpants", "Cropped pants", "Wool leggings", "Leather leggings",
  "Tweed trousers", "Waxed canvas pants", "Knit pants", "Faux leather pants", "Velvet pants",
  "Corduroy pants", "Moisture-wicking pants", "Harem pants", "Cargo joggers", "Denim joggers"]; //AH

// Female cold weather clothing options

var femaleColdTops = ["Turtleneck Sweater", "Cable Knit Sweater", "Cardigan", "Mock Neck Sweater", "Chunky Sweater",
    "Sweatshirt", "Hoodie", "Fleece Jacket", "Pullover Sweater", "V-Neck Sweater",
    "Cashmere Sweater", "Oversized Sweater", "Fair Isle Sweater", "Flannel Shirt", "Plaid Shirt",
    "Cropped Sweater", "Tunic Sweater", "Crewneck Sweater", "Button-Down Shirt", "Thermal Shirt",
    "Long-Sleeve Tee", "Henley Shirt", "Sweater Dress", "Tweed Jacket", "Puffer Vest",
    "Quilted Jacket", "Bomber Jacket", "Faux-Fur Jacket", "Leather Jacket", "Peacoat",
    "Parka", "Down Coat", "Fleece Pullover", "Sherpa Jacket", "Teddy Coat",
    "Faux-Shearling Jacket", "Wool Blazer", "Wrap Sweater", "Cold Shoulder Sweater", "Off-The-Shoulder Sweater",
    "Tie-Front Sweater", "Cropped Hoodie", "Turtleneck Tunic", "Bell-Sleeve Sweater", "Lace-Up Sweater",
    "Zip-Up Hoodie", "Cowl Neck Sweater", "Asymmetrical Sweater", "Open-Front Cardigan", "Knit Poncho"]; //HW
    
var femaleColdBottoms = ["Skinny Jeans", "Wide-Leg Pants", "Corduroy Pants", "High-Waisted Jeans", "Leggings",
    "Jeggings", "Fleece-Lined Leggings", "Sweatpants", "Cargo Pants", "Plaid Pants",
    "Wool Pants", "Leather Leggings", "Pleated Skirt", "Midi Skirt", "Maxi Skirt",
    "A-Line Skirt", "Corduroy Skirt", "Denim Skirt", "Pencil Skirt", "Wrap Skirt",
    "Flare Jeans", "Straight-Leg Jeans", "Bootcut Jeans", "Flare Pants", "Cropped Jeans",
    "Cropped Pants", "Ponte Pants", "Trousers", "Faux-Leather Pants", "Wide-Leg Jeans",
    "Joggers", "Suede Leggings", "Faux-Suede Skirt", "Knit Skirt", "Velvet Pants",
    "Velvet Skirt", "Plaid Skirt", "Faux-Leather Skirt", "Paperbag Waist Pants", "High-Waisted Leggings",
    "Sequined Skirt", "Camo Pants", "Cargo Skirt", "Fleece-Lined Tights", "Fishnet Tights",
    "Opaque Tights", "Cable Knit Tights", "Ribbed Tights", "Leather Pants"]; //HW

// Male rainy weather clothing options
var maleRainyTops = [ "Waterproof Hooded Jacket",  "Rain-resistant Windbreaker",  "Fleece-Lined Parka",  "Zip-up Raincoat",
    "Pullover Poncho",  "Heavy-Duty Work Jacket",  "Breathable Softshell Jacket",  "Hooded Poncho", 
    "Water-resistant Bomber Jacket",  "Lightweight Packable Jacket",  "Insulated Vest",  "Pullover Sweatshirt",
    "Waterproof Shell Jacket",  "Softshell Hooded Jacket",  "Quarter-Zip Fleece",  "Long-Sleeve Button-Down Shirt",
    "Packable Down Jacket",  "Full-Zip Hoodie",  "Water-resistant Anorak",  "Hooded Sweatshirt",  "Sherpa-Lined Hoodie",
    "Wind-resistant Pullover",  "Waterproof Trench Coat",  "Insulated Ski Jacket",  "Rain-resistant Utility Jacket",  "Classic Denim Jacket",
    "Cotton Twill Jacket",  "Waxed Canvas Jacket",  "Leather Jacket",  "Corduroy Jacket",  "Bomber Jacket",  "Quilted Vest",  "Puffer Jacket",
    "Blazer",  "Track Jacket",  "Fleece Jacket",  "Peacoat",  "Macintosh Coat",  "Trench Coat",  "Fishtail Parka",  "Military Jacket",  "Field Jacket",
    "Nylon Windbreaker",  "Technical Shell Jacket",  "Denim Shirt Jacket",  "Zip-Up Hooded Sweater",  "Flannel Shirt",  "Crewneck Sweater",  "Knit Cardigan",
    "Henley Shirt"]; //AH
    
var maleRainyBottoms = [  "Waterproof Pants",  "Rain-resistant Joggers",  "Fleece-Lined Jeans",
    "Cargo Shorts",  "Quick-Dry Board Shorts",  "Work Pants",  "Breathable Softshell Pants",
    "Rain-resistant Chinos",  "Waterproof Overalls",  "Lightweight Hiking Pants",  "Insulated Snow Pants",
    "Athletic Track Pants",  "Waterproof Ski Pants",  "Convertible Cargo Pants",  "Stretchable Jeans",
    "Cotton Twill Pants",  "Rain-resistant Golf Pants",  "Water-resistant Dress Pants",  "Wind-resistant Joggers",
    "Padded Bike Shorts",  "Moisture-wicking Leggings",  "Rain-resistant Cargo Pants",  "Polyester Sweatpants",
    "Water-resistant Swim Trunks",  "Slim-fit Chinos",  "Techwear Cargo Pants",  "Canvas Work Shorts",
    "Utility Joggers",  "Nylon Athletic Shorts",  "Cargo Sweatpants"]; //AH

// female rainy weather clothing options
   
var femaleRainyTops = [  "Waterproof Hooded Jacket",  "Rain-resistant Windbreaker",  "Fleece-Lined Parka",
    "Zip-up Raincoat",  "Pullover Poncho",  "Breathable Softshell Jacket",  "Hooded Rain Jacket",
    "Water-resistant Bomber Jacket",  "Lightweight Packable Jacket",  "Insulated Vest",  "Pullover Sweatshirt",
    "Waterproof Shell Jacket",  "Softshell Hooded Jacket",  "Quarter-Zip Fleece",
    "Long-Sleeve Button-Down Shirt",  "Packable Down Jacket",  "Full-Zip Hoodie","Water-resistant Anorak",
    "Hooded Sweatshirt",  "Sherpa-Lined Hoodie",  "Wind-resistant Pullover",  "Waterproof Trench Coat",
    "Insulated Ski Jacket",  "Rain-resistant Utility Jacket",  "Softshell Fleece Jacket",
    "Breathable Rain Poncho",  "Lightweight Hooded Cape",  "Quilted Bomber Jacket",
    "Waterproof Sailing Jacket",  "Hooded Puffer Jacket"]; //HW

var femaleRainyBottoms = [  "Waterproof Pants",  "Rain-resistant Leggings",  "Fleece-Lined Jeans",
    "Cargo Pants",  "Quick-Dry Shorts",  "Work Pants",  "Breathable Softshell Pants",  "Rain-resistant Chinos",
    "Waterproof Overalls",  "Lightweight Hiking Pants",  "Insulated Snow Pants",  "Athletic Track Pants",
    "Waterproof Ski Pants",  "Convertible Cargo Pants",  "Stretchable Jeans",  "Cotton Twill Pants",
    "Rain-resistant Golf Pants",  "Water-resistant Dress Pants",  "Wind-resistant Joggers",  "Padded Bike Shorts",
    "Moisture-wicking Leggings",  "Rain-resistant Cargo Pants",  "Polyester Sweatpants",
    "Water-resistant Swim Shorts",  "Slim-fit Chinos",  "Quilted Leggings",  "Tapered Sweatpants",
    "Fleece-Lined Leggings",  "Cargo Joggers",  "Waterproof Overalls",]; //HW

// Male windy weather clothing options

var maleWindyTops = ["Windproof Jacket", "Insulated Parka", "Fleece-Lined Hoodie", "Half-Zip Pullover",
    "Water-resistant Anorak",  "Windbreaker Vest", "Quarter-Zip Fleece", "Softshell Jacket", "Hooded Sweatshirt",
    "Wind-resistant Hoodie",  "Pullover Sweater", "Packable Down Jacket", "Lightweight Windbreaker",
    "Wind-resistant Pullover", "Bomber Jacket",  "Waterproof Rain Jacket", "Full-Zip Hoodie",
    "Fleece-Lined Flannel Shirt", "Hooded Rain Jacket", "Insulated Ski Jacket",  "Zip-up Cardigan",
    "Long-Sleeve Button-Down Shirt", "Sherpa-Lined Hoodie", "V-Neck Sweater", "Water-resistant Softshell",
    "Quilted Vest", "Fleece-Lined Jacket", "Heavy-Duty Work Jacket", "Waterproof Softshell Jacket",
    "Zip-up Sweater",  "Fleece Pullover", "Hooded Puffer Jacket", "Fleece-Lined Windbreaker", "Zip-up Jacket",
    "Quilted Jacket",  "Wind-resistant Fleece Jacket", "Hooded Softshell Jacket", "Down Jacket",
    "Bomber Jacket with Hood", "Water-resistant Jacket",  "Corduroy Jacket", "Wool Blend Peacoat",
    "Insulated Puffer Jacket", "Fleece-Lined Bomber Jacket", "Sherpa-Lined Denim Jacket",
    "Water-resistant Pullover", "Softshell Bomber Jacket", "Insulated Jacket", "Hooded Utility Jacket",
    "Rain-resistant Trench Coat"]; //AH
    
var maleWindyBottoms = ["Windproof Pants", "Cargo Pants", "Fleece-Lined Jeans", "Waterproof Rain Pants",
    "Wind-resistant Chinos",  "Athletic Track Pants", "Hiking Pants", "Insulated Snow Pants",
    "Stretchable Jeans", "Work Pants",  "Wind-resistant Joggers", "Corduroy Pants",
    "Water-resistant Golf Pants", "Sweatpants", "Convertible Cargo Pants",  "Wool Dress Pants",
    "Lightweight Shorts", "Khaki Chinos", "Moisture-wicking Leggings", "Rain-resistant Golf Pants",
    "Water-resistant Swim Shorts", "Slim-fit Jeans", "Wool-blend Trousers", "Polyester Athletic Shorts",
    "Rain-resistant Cargo Pants",  "Cargo Shorts", "Zip-off Hiking Pants", "Fleece Joggers", "Denim Shorts",
    "Pleated Dress Pants",  "Convertible Hiking Pants", "Twill Chinos", "Padded Cycling Shorts",
    "Wool-Blend Joggers", "Polyester Golf Shorts"]; //AH

// Female windy weather clothing options
    
var femaleWindyTops = [  "Windproof Jacket", "Fleece-Lined Hoodie", "Insulated Parka", "Hooded Sweatshirt",
    "Water-resistant Anorak",  "Softshell Jacket", "Half-Zip Pullover", "Wind-resistant Hoodie", "Full-Zip Fleece",
    "Pullover Sweater",  "Packable Down Jacket", "Lightweight Windbreaker", "Bomber Jacket", "Quarter-Zip Fleece",
    "Waterproof Rain Jacket",  "Wind-resistant Pullover", "Fleece-Lined Flannel Shirt", "Hooded Rain Jacket", "Sherpa-Lined Hoodie",
    "Insulated Ski Jacket",  "Zip-up Cardigan", "V-Neck Sweater", "Water-resistant Softshell", "Denim Jacket", "Turtleneck Sweater",
    "Faux Fur Coat", "Puffer Vest", "Cropped Sweater", "Belted Trench Coat", "Leather Jacket",  "Cable-Knit Cardigan",
    "Bomber Jacket with Faux Fur Trim", "Hooded Puffer Jacket", "Teddy Coat", "Oversized Hoodie",  "Quilted Jacket", "Fuzzy Jacket",
    "Textured Blazer", "Fleece Peacoat", "Shearling Coat",  "Patterned Sweatshirt", "Cashmere Wrap Sweater", "Cropped Denim Jacket",
    "Windbreaker Jacket", "Longline Teddy Coat",  "Embroidered Jacket", "Color Block Pullover", "Suede Moto Jacket", "Poncho Sweater",
    "Faux Leather Jacket"]; // HW

var femaleWindyBottoms = ["Windproof Pants", "Fleece-Lined Leggings", "Insulated Snow Pants", "Hiking Pants",
    "Water-resistant Cargo Pants",  "Wind-resistant Joggers", "Stretchable Jeans", "Cargo Capris", "Wind-resistant Leggings",
    "Athletic Track Pants",  "Cropped Chinos", "Softshell Pants", "Corduroy Pants", "Rain-resistant Golf Pants", "Wool Dress Pants",
    "Water-resistant Ski Pants", "Moisture-wicking Leggings", "Khaki Chinos", "Convertible Cargo Pants", "Sweatpants",
    "Slim-fit Jeans", "Wool-blend Trousers", "Rain-resistant Cargo Pants", "Polyester Athletic Shorts",
    "Water-resistant Hiking Shorts",  "Cotton Joggers", "Faux Leather Leggings", "Wide-Leg Pants", "Denim Shorts",
    "Cropped Leggings",  "Cargo Shorts", "Pleated Culottes", "Biker Shorts", "High-Waisted Trousers", "Utility Pants",
    "Cropped Wide-Leg Jeans", "Drawstring Sweatpants", "Flared Pants", "Athletic Leggings", "Satin Joggers",
    "Flowy Palazzo Pants", "Knit Leggings", "Pinstripe Trousers", "Cargo Joggers", "Leather Pants",  "Pleated Midi Skirt",
    "Denim Skirt", "Faux Leather Shorts", "Wide-Leg Jumpsuit", "Wool Midi Skirt"]; //HW

// Male snowy weather clothing options
var maleSnowyTops = ["Insulated Parka", "Down Jacket", "Fleece-Lined Hoodie", "Waterproof Rain Jacket", "Thermal Henley",
  "Quilted Jacket", "Puffer Vest", "Windbreaker Jacket", "Softshell Jacket", "Hooded Sweatshirt",
  "Fleece Pullover", "Sherpa Jacket", "Sweater Jacket", "Zip-Up Hoodie", "Snowboarding Jacket",
  "Ski Jacket", "Snowmobile Jacket", "Snowboard Sweatshirt", "Pullover Sweater", "Flannel Shirt",
  "Long Sleeve Tee", "Crewneck Sweatshirt", "Henley Shirt", "Turtleneck Sweater", "Performance Fleece"]; //AH
  
var maleSnowyBottoms = ["Insulated Snow Pants", "Snowboarding Pants", "Ski Pants", "Fleece-Lined Jeans", "Waterproof Rain Pants",
  "Snowmobile Pants", "Thermal Underwear", "Cargo Snow Pants", "Windproof Pants", "Hiking Pants",
  "Sweatpants", "Corduroy Pants", "Wool Dress Pants", "Softshell Pants", "Fleece-Lined Cargo Pants",
  "Snowboard Sweatpants", "Performance Fleece Pants", "Convertible Cargo Pants", "Flannel-Lined Jeans",
  "Insulated Overalls", "Fleece-Lined Leggings", "Cargo Shorts", "Base Layer Leggings", "Fleece-Lined Khaki Pants",
  "Water-resistant Golf Pants"]; //AH

// Female snowy weather clothing options

var femaleSnowyTops = ["Insulated Parka", "Down Jacket", "Fleece-Lined Hoodie", "Waterproof Rain Jacket", "Thermal Henley",
  "Quilted Jacket", "Puffer Vest", "Windbreaker Jacket", "Softshell Jacket", "Hooded Sweatshirt",
  "Fleece Pullover", "Sherpa Jacket", "Sweater Jacket", "Zip-Up Hoodie", "Snowboarding Jacket",
  "Ski Jacket", "Snowmobile Jacket", "Pullover Sweater", "Flannel Shirt", "Long Sleeve Tee",
  "Crewneck Sweatshirt", "Henley Shirt", "Turtleneck Sweater", "Performance Fleece", "Ski Sweater"]; //HW

var femaleSnowyBottoms = ["Insulated Pants", "Ski Pants", "Snowmobile Pants", "Fleece-Lined Leggings", "Thermal Base Layer Pants",
  "Snowboarding Pants", "Snowmobile Bibs", "Quilted Overalls", "Cargo Pants", "Softshell Pants",
  "Fleece Joggers", "Sweatpants", "Hiking Pants", "Winter Leggings", "Corduroy Pants", "Ski Bibs",
  "Fleece-Lined Jeans", "Ski Leggings", "Overalls", "Tapered Sweatpants", "Cargo Shorts", "Jeans",
  "Knit Pants", "Sweat Shorts", "Leather Pants"]; //HW
  