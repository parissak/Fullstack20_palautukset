interface bmiValues {
    height: number,
    weight: number
}

export const calculateBmi = (height: number, weight: number): string => {
    const bmi = weight / Math.pow((height / 100), 2);

    switch (true) {
        case (bmi <= 15):
            return "Very severely underweight";
        case (bmi <= 16):
            return "Severely underweight";
        case (bmi <= 18.5):
            return "Underweight";
        case (bmi <= 25):
            return "Normal (healthy weight)";
        case (bmi <= 30):
            return "Overweight";
        case (bmi <= 35):
            return "Obese Class I (Moderately obese)";
        case (bmi <= 40):
            return "Obese Class II (Severely obese)";
        case (bmi > 40):
            return "Obese Class III (Very severely obese)";
        default:
            throw new Error('Something went wrong');
    }
};

const parseBmiArguments = (args: Array<string>): bmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments were given');
    if (args.length > 4) throw new Error('Too many arguments were given');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        };
    } else {
        throw new Error('Provided values were not numbers');
    }
};

try {
    const { height, weight } = parseBmiArguments(process.argv);
    console.log(calculateBmi(height, weight));
} catch (e) {
    console.log('Something went wrong, error message: invalid parameters');
}