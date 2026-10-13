import { useState } from 'react'

export function Calculator() {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [operation, setOperation] = useState('add')
    const [result, setResult] = useState<number | null>(null)

    function calculate() {
        const a = Number(first)
        const b = Number(second)

        if (operation === 'add') setResult(a + b)
        if (operation === 'subtract') setResult(a - b)
        if (operation === 'multiply') setResult(a * b)
        if (operation === 'divide') setResult(a / b)
    }

    return (
        <>
            <div className="card p-4">

                <form onSubmit={(event) => {
                    event.preventDefault()
                    calculate()
                }}>
                    <div className="mb-3">
                        <label className="form-label">Első szám</label>
                        <input
                            className="form-control w-50 mx-auto"
                            type="number"
                            value={first}
                            onChange={(event) => setFirst(event.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Második szám</label>
                        <input
                            className="form-control w-50 mx-auto"
                            type="number"
                            value={second}
                            onChange={(event) => setSecond(event.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Művelet</label>
                        <select
                            className="form-select w-50 mx-auto"
                            value={operation}
                            onChange={(event) => setOperation(event.target.value)}
                        >
                            <option value="add">Összeadás</option>
                            <option value="subtract">Kivonás</option>
                            <option value="multiply">Szorzás</option>
                            <option value="divide">Osztás</option>
                        </select>
                    </div>

                    <button className="btn btn-primary" type="submit">
                        Számítás
                    </button>
                </form>

                {result !== null && <h3 className="mt-3">Eredmény: {result}</h3>}
            </div>
        </>
    )
}

export default Calculator