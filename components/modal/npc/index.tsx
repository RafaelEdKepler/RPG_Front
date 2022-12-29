import { useState, useEffect } from "react";
import { generateRandomNpc } from "../../../utils/npc";
import { Button, ButtonContainer, Field, LargeField, ModalInfo } from "../style"

export const Npc = () => {

    const [firstPhysical, setFirstPhysical] = useState("");
    const [secondPhysical, setSecondPhysical] = useState("");
    const [characteristics, setCharacteristics] = useState("");
    const [personality, setPersonality] = useState("");

    useEffect(() => {
        const response = generateRandomNpc();
        setFirstPhysical(response.firstPhysicalValue);
        setSecondPhysical(response.secondPhysicalValue);
        setCharacteristics(response.characteristicsValue);
        setPersonality(response.personalityValue);
    })

    return (
        <>
            <ModalInfo>
                <div>
                    <span>1ª Característica Física:</span>
                </div>
                <Field type="text" value={firstPhysical} onChange={(e) => setFirstPhysical(e.target.value)} />
            </ModalInfo>
            <ModalInfo>
                <div>
                    <span>2ª Característica Física:</span>
                </div>
                <Field type="text" value={secondPhysical} onChange={(e) => setSecondPhysical(e.target.value)} />
            </ModalInfo>
            <ModalInfo>
                <div>
                    <span>Personalidade:</span>
                </div>
                <LargeField value={personality} onChange={(e) => setPersonality(e.target.value)} />
            </ModalInfo>
            <ModalInfo>
                <div>
                    <span>Característica Física:</span>
                </div>
                <LargeField value={characteristics} onChange={(e) => setCharacteristics(e.target.value)} />
            </ModalInfo>
            <ButtonContainer>
                <Button>Adicionar NPC</Button>
            </ButtonContainer>
        </>
    )
}