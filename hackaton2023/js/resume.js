const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";
const prompt ="Створи резюме в ІТ компанію з цих данних: " + document.getElementById('name').value + " " + document.getElementById('surname').value + " " + document.getElementById('phone').value + " " + document.getElementById('email').value;
const gen = document.getElementById('gen');
const res = document.getElementById('res');




const generate = async () =>{
    try{
        const response = await fetch(API_URL, {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
            body:JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
            })
        });

        const data = await response.json();
        console.log(data);
        res.innerText = data.choices[0].message.content;
    } catch(error){
        console.log("Error: " + error);
        res.innerText = "Error ocured"
    }
}

gen.addEventListener('click',generate);