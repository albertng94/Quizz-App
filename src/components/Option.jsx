export default function Option({ children, id, className, onClick }) {
    return (
        <li className="answer">
            <button id={id} className={className} onClick={onClick}>{children}</button>
        </li>
    );
}