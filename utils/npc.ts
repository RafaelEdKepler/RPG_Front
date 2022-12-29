const firstPhysical = [
    "1",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
]

const secondPhysical = [
    "1",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
]

const personality = [
    "1",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
]

const characteristics = [
    "1",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
]

const min = 0;
const max = 20;

export const generateRandomNpc = () => {
    const firstPhysicalValue = firstPhysical[Math.random() * (max - min + 1) + min];
    const secondPhysicalValue = secondPhysical[Math.random() * (max - min + 1) + min];
    const personalityValue = personality[Math.random() * (max - min + 1) + min];
    const characteristicsValue = characteristics[Math.random() * (max - min + 1) + min];

    return {
        firstPhysicalValue,
        secondPhysicalValue,
        personalityValue,
        characteristicsValue
    }
}

export const generateRandomFirstPhysicalValue = () => {
    return firstPhysical[Math.random() * (max - min + 1) + min];
}

export const generateRandomSecondPhysicalValue = () => {
    return secondPhysical[Math.random() * (max - min + 1) + min];
}

export const generateRandomPersonalityValue = () => {
    return personality[Math.random() * (max - min + 1) + min];
}

export const generateRandomCharacteristicsValue = () => {
    return characteristics[Math.random() * (max - min + 1) + min];
}