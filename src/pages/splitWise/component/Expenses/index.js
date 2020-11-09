import React from "react";
import {Button} from "../../../../components";
import "./index.css";

function Expenses({ data, people, deleteButton }) {
    const Total = () => {
        const total = {};
        Object.values(people).map(
            (person) => (total[person.name] = { id: person.id, cost: 0 })
        );
        const costs = data.map((expense) => expense.costs);
        costs.forEach((element) => {
            element.map((expense) => {
                total[expense.name].cost += expense.portion;
            });
        });

        return (
            <div>
                <h1>Total</h1>
                {Object.keys(total).map((name) => (
                    <p key={total[name].id}>
                        {name} : {total[name].cost}
                    </p>
                ))}
            </div>
        );
    };

    return (
        <div>
            <div>
                {data.map((expense) => (
                    <p key={expense.id}>
                        <span>{expense.subject.toUpperCase()}</span>
                        {expense.costs.map((person) => (
                            <span key={person.id}>
                                &nbsp;&nbsp; - {person.name}:{person.portion}
                            </span>
                        ))}
                        &nbsp;&nbsp;
                        <Button
                            children={"Delete"}
                            danger={true}
                            onClick={() => deleteButton(expense.id)}
                        />
                    </p>
                ))}
            </div>
            <Total />
        </div>
    );
}

export default Expenses;
