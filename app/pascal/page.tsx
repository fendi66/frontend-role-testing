"use client"

function generatePascal(numRows: number): number[][] {
    const res: number[][] = [];
    for (let i = 0; i < numRows; i++) {
        res[i] = [];
        res[i][0] = 1;
        res[i][i] = 1;
        for (let j = 1; j < i; j++) {
            res[i][j] = res[i - 1][j] + res[i - 1][j - 1];
        }
    }
    return res;
}

const PascalTriangle = ({ n = 15 }: { n?: number }) => {
    const pascal = generatePascal(n);

    return (
        <div className="font-mono text-lg">
            {
                pascal.map((row, i) => (
                    <div key={i}>
                        <span style={{ display: "inline-block", width: (n - row.length) * 30 }} />
                        {
                            row.map((num, idx) => {
                                let color = "white";
                                let width = "60px";
                                let returnValue = num;

                                const isOuterOne = num === 1 && (idx === 0 || idx === row.length - 1);

                                if (!isOuterOne) {
                                    if (num % 2 === 0) color = "green";
                                    else color = "red";
                                }
                                return (
                                    <span key={idx} style={{
                                        display: "inline-block",
                                        color,
                                        width,
                                        textAlign: "center"
                                    }}>
                                        {returnValue}
                                    </span>
                                )
                            })
                        }
                    </div>
                ))
            }
        </div>
    )
}

const PascalTriangleSum = ({ n = 15 }: { n?: number }) => {
    const pascal = generatePascal(n);

    return (
        <div className="font-mono text-lg">
            {
                pascal.map((row, i) => (
                    <div key={i}>
                        <span style={{ display: "inline-block", width: (n - row.length) * 30 }} />
                        {
                            row.map((num, idx) => {
                                let color = "white";
                                let width = "60px";
                                let returnValue: number | string = num;

                                const isOuterOne = num === 1 && (idx === 0 || idx === row.length - 1);
                                const sum = row.reduce((a, b) => a + b, 0);

                                if (!isOuterOne) {
                                    if (num % 2 === 0) color = "green";
                                    else color = "red";
                                }

                                if (idx === row.length - 1) {
                                    returnValue = sum === 1 ? `${num} == 0` : `${num} == ${sum - 2}`;
                                    width = '110px';
                                }
                                return (
                                    <span key={idx} style={{
                                        display: "inline-block",
                                        color,
                                        width,
                                        textAlign: "center"
                                    }}>
                                        {returnValue}
                                    </span>
                                )
                            })
                        }
                    </div>
                ))
            }
        </div>
    )
}

const PascalTriangleSumReverse = ({ n = 15 }: { n?: number }) => {
    const pascal = generatePascal(n);

    return (
        <div className="font-mono text-lg" style={{marginTop: "100px"}}>
            {
                pascal.reverse().map((row, i) => (
                    <div key={i}>
                        <span style={{ display: "inline-block", width: (n - row.length) * 30 }} />
                        {
                            row.map((num, idx) => {
                                let color = "white";
                                let width = "60px";
                                let returnValue: number | string = num;

                                const isOuterOne = num === 1 && (idx === 0 || idx === row.length - 1);
                                const sum = row.reduce((a, b) => a + b, 0);

                                if (!isOuterOne) {
                                    if (num % 2 === 0) color = "green";
                                    else color = "red";
                                }

                                if (idx === row.length - 1) {
                                    returnValue = sum === 1 ? `${num} == 0` : `${num} == ${sum - 2}`;
                                    width = '110px';
                                }
                                return (
                                    <span key={idx} style={{
                                        display: "inline-block",
                                        color,
                                        width,
                                        textAlign: "center"
                                    }}>
                                        {returnValue}
                                    </span>
                                )
                            })
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default PascalTriangleSumReverse;