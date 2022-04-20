import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

app.get('/holidays', (req, res) => {
    res.send(holidays);
});

app.get("/is-today-holiday", (req, resp) => {
    const hoje = new Date().toLocaleDateString("en-US");
    const feriado = [];

    holidays.map((holiday) => {
      if (holiday.date == hoje) {
        feriado.push(holiday);
      }
    });
    
    if (feriado.length > 0) {
      resp.send(`Sim, hoje é ${feriado[0].name}`);
    } else {
      resp.send(`Não, hoje não é feriado`);
    }
});

app.get('/holidays/:mes', (req,res) => {
    const id = req.params.mes;

    let feriados = holidays.filter((feriado) => {
        let mes = feriado.date.split("/")[0];
        return mes === id;
    });

    res.send(feriados)
});

app.listen(5000);






