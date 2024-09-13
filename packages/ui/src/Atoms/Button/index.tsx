interface IButton {
    label?: string;
}

export const Button = ({ label }: IButton) => {
    return (
        <>
            <button className="text-yellow-400 bg-gray-600 border-white p-4 m-4 border-2 rounded-lg">{label}</button>
        </>
    );
};
