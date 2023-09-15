import { ButtonProps } from "@/types/props";

export default function Button(props: ButtonProps) {
    return <button className="bg-lilac border rounded px-2 py-1 font-semibold text-dutch-white">
        {props.text}
    </button>
}