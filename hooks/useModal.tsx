import { atom, useRecoilState } from "recoil";

const modalAtom = atom({
    key: "modalAtom",
    default: false,
})

export const useModal = () => {
    const [modalState, setModalState] = useRecoilState(modalAtom);
    return { modalState, setModalState }
}



