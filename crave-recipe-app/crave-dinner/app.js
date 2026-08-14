const recipes = [
  {id:"vodka", title:"Spicy Vodka Rigatoni", emoji:"🍝", time:"30 min", difficulty:"Easy", cuisine:"Italian", moods:["indulgent","cozy"], flavors:["savory","spicy","creamy"], effort:"30", protein:"Pasta", desc:"Silky tomato-vodka sauce, plenty of Parmesan, and just enough chile heat to keep every bite interesting.", ingredients:["12 oz rigatoni","2 tbsp olive oil","3 cloves garlic, minced","1/2 tsp red pepper flakes","2 tbsp tomato paste","1/3 cup vodka","3/4 cup heavy cream","3/4 cup Parmesan, grated","Salt & black pepper","Fresh basil"], steps:["Bring a large pot of well-salted water to a boil. Cook the rigatoni until just shy of al dente; reserve 1 cup pasta water.","Warm olive oil in a large skillet over medium heat. Add garlic and chile flakes and cook for 30 seconds.","Stir in tomato paste and cook until it darkens slightly, about 2 minutes. Carefully add vodka and simmer for 1 minute.","Lower the heat and stir in cream. Add the drained pasta and toss, loosening with pasta water until glossy.","Turn off the heat. Fold in Parmesan and season aggressively with salt and black pepper. Finish with basil."]},
  {id:"korean", title:"Crispy Korean Chicken", emoji:"🍗", time:"35 min", difficulty:"Easy", cuisine:"Korean", moods:["bold","indulgent"], flavors:["savory","spicy","sweet"], effort:"30", protein:"Chicken", desc:"Crunchy chicken tossed in a sticky gochujang glaze with garlic, ginger, and a bright finish.", ingredients:["1 lb boneless chicken thighs","1/2 cup cornstarch","1 tsp kosher salt","2 tbsp neutral oil","2 tbsp gochujang","1 tbsp soy sauce","1 tbsp honey","2 cloves garlic, grated","1 tsp grated ginger","1 tsp rice vinegar","Sesame seeds & scallions"], steps:["Pat the chicken dry and cut into bite-size pieces. Season with salt, then toss thoroughly in cornstarch.","Heat oil in a large skillet over medium-high. Add chicken in a single layer and cook until deeply golden and crisp.","Mix gochujang, soy sauce, honey, garlic, ginger, and vinegar in a small bowl.","Reduce the skillet to medium. Add the sauce and toss the chicken for 1–2 minutes until glossy and coated.","Finish with sesame seeds and sliced scallions. Serve immediately while the chicken is crisp."]},
  {id:"tacos", title:"Smoky Steak Tacos", emoji:"🌮", time:"25 min", difficulty:"Easy", cuisine:"Mexican", moods:["bold","hearty"], flavors:["savory","smoky","spicy"], effort:"30", protein:"Beef", desc:"Charred steak, warm tortillas, lime, and a punchy salsa for a fast taco-night win.", ingredients:["1 lb skirt or flank steak","1 tsp smoked paprika","1 tsp cumin","1/2 tsp chili powder","8 corn tortillas","1/2 white onion, sliced","1 lime","1/2 cup salsa","Cilantro","Salt & pepper"], steps:["Pat the steak dry. Season with smoked paprika, cumin, chili powder, salt, and black pepper.","Heat a cast-iron skillet until very hot. Sear the steak 3–5 minutes per side depending on thickness.","Rest the steak for 5 minutes, then slice thinly across the grain.","Warm the tortillas in the same pan until lightly charred. Add steak, onion, salsa, and cilantro.","Finish each taco with a squeeze of fresh lime."]},
  {id:"salmon", title:"Miso-Glazed Salmon Bowl", emoji:"🍣", time:"25 min", difficulty:"Easy", cuisine:"Japanese", moods:["fresh","light"], flavors:["savory","sweet","umami"], effort:"30", protein:"Fish", desc:"Buttery salmon glazed with miso and honey over rice with crisp cucumber and sesame.", ingredients:["2 salmon fillets","1 tbsp white miso","1 tbsp honey","1 tsp soy sauce","1 tsp rice vinegar","2 cups cooked rice","1/2 cucumber","1 scallion","Sesame seeds","Optional chili crisp"], steps:["Whisk miso, honey, soy sauce, and rice vinegar until smooth. Pat salmon dry and brush generously with glaze.","Heat a nonstick skillet over medium. Cook salmon skin-side down until nearly cooked through.","Brush again with glaze, flip, and cook for 1 minute until caramelized. Do not let the glaze burn.","Build bowls with warm rice, sliced cucumber, and salmon.","Top with scallions, sesame seeds, and a little chili crisp if you want heat."]},
  {id:"curry", title:"Creamy Coconut Curry", emoji:"🍛", time:"40 min", difficulty:"Medium", cuisine:"Thai", moods:["cozy","bold"], flavors:["savory","spicy","creamy"], effort:"45", protein:"Chicken", desc:"A fragrant coconut curry with tender chicken, aromatics, and a bright lime finish.", ingredients:["1 lb chicken thighs","1 tbsp oil","2 tbsp Thai red curry paste","1 can coconut milk","1 bell pepper","1 tbsp fish sauce","1 tsp brown sugar","1 cup chicken stock","1 lime","Thai basil or cilantro","Cooked jasmine rice"], steps:["Cut chicken into bite-size pieces and season lightly with salt.","Heat oil in a deep skillet. Fry curry paste for 1 minute until fragrant.","Add chicken and cook for 3 minutes. Pour in coconut milk and stock.","Add sliced bell pepper, fish sauce, and brown sugar. Simmer 12–15 minutes until chicken is tender.","Finish with lime juice and herbs. Serve over hot jasmine rice."]},
  {id:"burger", title:"The Crispy Smashed Burger", emoji:"🍔", time:"20 min", difficulty:"Easy", cuisine:"American", moods:["indulgent","hearty"], flavors:["savory","smoky"], effort:"15", protein:"Beef", desc:"A deeply browned double smash burger with crisp edges, melted cheese, and a tangy house sauce.", ingredients:["8 oz 80/20 ground beef","2 burger buns","2 slices American cheese","1 tbsp mayonnaise","1 tsp mustard","1 tsp ketchup","Dill pickles","1/4 onion, finely diced","Salt & pepper"], steps:["Divide beef into two loose 4 oz balls. Heat a cast-iron skillet until smoking hot.","Place beef balls down and smash firmly with a spatula for 10 seconds. Season with salt.","Cook 2 minutes until the edges are deeply crisp. Scrape and flip.","Add cheese and cook 1 minute more. Toast buns in the same skillet.","Mix mayo, mustard, and ketchup. Build burgers with sauce, beef, onion, and pickles."]},
  {id:"pasta", title:"Lemony Garlic Shrimp Pasta", emoji:"🍤", time:"20 min", difficulty:"Easy", cuisine:"Italian", moods:["fresh","light"], flavors:["savory","tangy"], effort:"15", protein:"Fish", desc:"Fast shrimp pasta with garlic, lemon, butter, and enough pasta water to make a glossy sauce.", ingredients:["8 oz spaghetti","8 oz peeled shrimp","3 cloves garlic","2 tbsp butter","1 tbsp olive oil","1 lemon","1/4 tsp chile flakes","1/4 cup Parmesan","Parsley","Salt & pepper"], steps:["Cook spaghetti in salted water until al dente. Reserve 1 cup pasta water.","Pat shrimp dry. Heat olive oil in a skillet and sear shrimp 1–2 minutes per side; remove.","Add butter, garlic, and chile flakes. Cook for 30 seconds, then add lemon zest and juice.","Add pasta and a splash of pasta water. Toss hard until glossy, adding more water as needed.","Return shrimp, fold in Parmesan and parsley, and season to taste."]},
  {id:"shawarma", title:"Chicken Shawarma Bowls", emoji:"🥙", time:"35 min", difficulty:"Easy", cuisine:"Middle Eastern", moods:["fresh","hearty","bold"], flavors:["savory","tangy","spicy"], effort:"30", protein:"Chicken", desc:"Warm spiced chicken with fluffy rice, crunchy cucumber, herbs, and a creamy garlic sauce.", ingredients:["1 lb chicken thighs","1 tsp cumin","1 tsp paprika","1/2 tsp coriander","1/2 tsp turmeric","2 cups cooked rice","1 cucumber","1/2 cup Greek yogurt","1 garlic clove","1/2 lemon","Parsley","Salt"], steps:["Season chicken with cumin, paprika, coriander, turmeric, salt, and a little oil.","Sear in a hot skillet until browned and cooked through, about 5–7 minutes per side.","Mix yogurt, grated garlic, lemon juice, and a pinch of salt for the sauce.","Slice chicken and build bowls with rice, cucumber, herbs, and garlic sauce.","Finish with lemon and a drizzle of olive oil."]},
  {id:"friedrice", title:"Firecracker Fried Rice", emoji:"🍚", time:"18 min", difficulty:"Easy", cuisine:"Asian", moods:["quick","bold"], flavors:["savory","spicy"], effort:"15", protein:"Egg", desc:"High-heat fried rice with crispy bits, scrambled egg, scallions, and a fiery soy glaze.", ingredients:["3 cups cold cooked rice","2 eggs","2 tbsp neutral oil","2 scallions","1 cup frozen peas & carrots","1 tbsp soy sauce","1 tsp sesame oil","1 tbsp chili crisp","1 garlic clove","Black pepper"], steps:["Heat a wok or large skillet until very hot. Add oil and scramble the eggs; push them aside.","Add garlic, vegetables, and cold rice. Toss constantly for 2–3 minutes.","Add soy sauce and black pepper around the edge of the pan. Toss until every grain is coated.","Fold in scallions and sesame oil.","Serve with chili crisp on top and extra scallions."]}
];

const steps = [
  {eyebrow:"START WITH A VIBE", title:"What's calling your name?", subtitle:"Pick what sounds good. There are no wrong answers.", key:"mood", choices:[
    ["🍔","Indulgent","I want the good stuff","indulgent"],["🌶️","Bold & spicy","Bring the flavor","bold"],["🥗","Fresh & light","Clean and bright","fresh"],["🍜","Cozy","Comfort me","cozy"],["🥩","Hearty","I am hungry","hearty"],["⚡","Quick","Feed me fast","quick"]]},
  {eyebrow:"CHOOSE A DIRECTION", title:"Where are we going?", subtitle:"Pick a cuisine — or keep the world open.", key:"cuisine", choices:[
    ["🇮🇹","Italian","Pasta, pizza & more","Italian"],["🇲🇽","Mexican","Tacos, salsa & heat","Mexican"],["🇯🇵","Japanese","Umami & precision","Japanese"],["🇰🇷","Korean","Big, bold flavor","Korean"],["🇹🇭","Thai","Fragrant & vibrant","Thai"],["🌎","Anything","Surprise me","Anything"]]},
  {eyebrow:"TUNE THE FLAVOR", title:"What flavor sounds best?", subtitle:"Choose the direction your taste buds want to go.", key:"flavor", choices:[
    ["🧂","Savory","Deep & satisfying","savory"],["🌶️","Spicy","Turn up the heat","spicy"],["🧈","Creamy","Rich & silky","creamy"],["🍋","Tangy","Bright & punchy","tangy"],["🍯","Sweet & savory","A little balance","sweet"],["🔥","Smoky","Charred & grilled","smoky"]]},
  {eyebrow:"LAST QUESTION", title:"How much work?", subtitle:"How ambitious are we feeling tonight?", key:"effort", choices:[
    ["⚡","15 minutes","No time to waste","15"],["🍳","30 minutes","A normal dinner","30"],["👨‍🍳","45+ minutes","Let's actually cook","45"],["🎲","Surprise me","You decide","Any"]]}
];

let currentStep = 0;
let selections = {};
let saved = JSON.parse(localStorage.getItem("craveSaved") || "[]");

const $ = id => document.getElementById(id);

function startQuiz(){
  $("hero").classList.add("hidden");
  $("results").classList.add("hidden");
  $("recipeView").classList.add("hidden");
  $("savedView").classList.add("hidden");
  $("quiz").classList.remove("hidden");
  currentStep = 0; selections = {};
  renderStep();
  window.scrollTo({top:0, behavior:"smooth"});
}
function renderStep(){
  const s=steps[currentStep];
  $("stepLabel").textContent=`${currentStep+1} of ${steps.length}`;
  $("progressBar").style.width=`${((currentStep+1)/steps.length)*100}%`;
  $("quizEyebrow").textContent=s.eyebrow;
  $("quizTitle").textContent=s.title;
  $("quizSubtitle").textContent=s.subtitle;
  $("backButton").style.visibility=currentStep===0?"hidden":"visible";
  $("choices").innerHTML=s.choices.map(c=>`
    <button class="choice" onclick="selectChoice('${s.key}','${c[3]}')">
      <span class="emoji">${c[0]}</span><span><strong>${c[1]}</strong><small>${c[2]}</small></span>
    </button>`).join("");
}
function selectChoice(key,value){
  selections[key]=value;
  if(currentStep<steps.length-1){currentStep++;renderStep();window.scrollTo({top:0,behavior:"smooth"})}
  else showResults();
}
function previousStep(){if(currentStep>0){currentStep--;renderStep()}}
function scoreRecipe(r){
  let score=0;
  if(selections.mood && r.moods.includes(selections.mood)) score+=4;
  if(selections.cuisine && selections.cuisine!=="Anything" && r.cuisine===selections.cuisine) score+=6;
  if(selections.flavor && r.flavors.includes(selections.flavor)) score+=5;
  if(selections.effort && selections.effort!=="Any"){
    const e=Number(selections.effort), t=parseInt(r.time);
    if((e===15&&t<=20)||(e===30&&t>20&&t<=35)||(e===45&&t>35)) score+=4;
    else if(Math.abs(t-e)<=10) score+=2;
  }
  return score+Math.random();
}
function showResults(){
  const ranked=[...recipes].sort((a,b)=>scoreRecipe(b)-scoreRecipe(a)).slice(0,6);
  $("quiz").classList.add("hidden");$("results").classList.remove("hidden");
  const parts=[selections.mood,selections.cuisine!=="Anything"?selections.cuisine:"anything",selections.flavor].filter(Boolean);
  $("resultsSummary").textContent=`Based on your ${parts.slice(0,3).join(" · ")} picks, here are a few dishes we think you'll love.`;
  renderRecipeCards(ranked,"recipeGrid");
  window.scrollTo({top:0,behavior:"smooth"});
}
function renderRecipeCards(list,targetId){
  $(targetId).innerHTML=list.map(r=>`
    <article class="recipe-card">
      <div class="recipe-image"><span>${r.emoji}</span>
        <button class="save-icon" aria-label="Save ${r.title}" onclick="toggleSave('${r.id}', event)">${saved.includes(r.id)?"♥":"♡"}</button>
      </div>
      <div class="card-body">
        <div class="meta">${r.cuisine} · ${r.time} · ${r.difficulty}</div>
        <h3>${r.title}</h3>
        <p class="meta">${r.desc}</p>
        <div class="tags">${r.flavors.slice(0,3).map(x=>`<span class="tag">${x}</span>`).join("")}</div>
        <button class="view-recipe" onclick="openRecipe('${r.id}')">View recipe →</button>
      </div>
    </article>`).join("");
}
function openRecipe(id){
  const r=recipes.find(x=>x.id===id);
  $("results").classList.add("hidden");$("savedView").classList.add("hidden");$("quiz").classList.add("hidden");$("hero").classList.add("hidden");
  $("recipeView").classList.remove("hidden");
  $("recipeView").innerHTML=`
    <button class="back-link" onclick="backToResults()">← Back to your picks</button>
    <div class="recipe-detail">
      <div class="detail-photo"><span>${r.emoji}</span></div>
      <div class="detail-content">
        <p class="eyebrow">${r.cuisine.toUpperCase()}</p>
        <h2>${r.title}</h2>
        <p class="detail-desc">${r.desc}</p>
        <div class="detail-meta"><span>⏱ ${r.time}</span><span>★ ${r.difficulty}</span><span>🍽 4 servings</span></div>
        <button class="primary-button" onclick="toggleSave('${r.id}')">${saved.includes(r.id)?"♥ Saved":"♡ Save recipe"}</button>
        <h3>Ingredients</h3>
        <ul class="ingredients">${r.ingredients.map(x=>`<li>${x}</li>`).join("")}</ul>
        <h3>Let's cook</h3>
        <ol class="steps">${r.steps.map(x=>`<li>${x}</li>`).join("")}</ol>
      </div>
    </div>`;
  window.scrollTo({top:0,behavior:"smooth"});
}
function backToResults(){showResults()}
function toggleSave(id,event){
  if(event) event.stopPropagation();
  if(saved.includes(id)){saved=saved.filter(x=>x!==id);toast("Removed from saved")}
  else{saved.push(id);toast("Saved to your recipes")}
  localStorage.setItem("craveSaved",JSON.stringify(saved));
  updateSavedCount();
  if(!$("results").classList.contains("hidden")) {
    const ranked=[...recipes].sort((a,b)=>scoreRecipe(b)-scoreRecipe(a)).slice(0,6);renderRecipeCards(ranked,"recipeGrid");
  }
  if(!$("savedView").classList.contains("hidden")) renderSaved();
}
function updateSavedCount(){$("savedCount").textContent=saved.length}
function showSaved(){
  $("hero").classList.add("hidden");$("quiz").classList.add("hidden");$("results").classList.add("hidden");$("recipeView").classList.add("hidden");$("savedView").classList.remove("hidden");renderSaved();window.scrollTo({top:0,behavior:"smooth"});
}
function renderSaved(){
  const list=recipes.filter(r=>saved.includes(r.id));
  $("savedGrid").innerHTML=list.length?list.map(r=>`
    <article class="recipe-card"><div class="recipe-image"><span>${r.emoji}</span><button class="save-icon" onclick="toggleSave('${r.id}',event)">♥</button></div>
    <div class="card-body"><div class="meta">${r.cuisine} · ${r.time}</div><h3>${r.title}</h3><p class="meta">${r.desc}</p><button class="view-recipe" onclick="openRecipe('${r.id}')">View recipe →</button></div></article>`).join("")
    :`<div style="grid-column:1/-1;text-align:center;padding:70px 10px;color:var(--muted)"><div style="font-size:50px">♡</div><h3 style="font-family:'Playfair Display',serif;color:var(--ink);font-size:28px">Nothing saved yet</h3><p>Tap the heart on a recipe you want to make.</p></div>`;
}
function closeSaved(){$("savedView").classList.add("hidden");$("results").classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"})}
function resetApp(){$("hero").classList.remove("hidden");$("quiz").classList.add("hidden");$("results").classList.add("hidden");$("recipeView").classList.add("hidden");$("savedView").classList.add("hidden");window.scrollTo({top:0,behavior:"smooth"})}
function toast(message){const t=$("toast");t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800)}
$("savedButton").addEventListener("click",showSaved);
updateSavedCount();
