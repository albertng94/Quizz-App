export default function Option({ children }) {
    return (
        <li className="answer">
            <button>{children}</button>
        </li>
    );
}