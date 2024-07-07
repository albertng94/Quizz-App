export default function Option({ children, id, className, onClick, disable }) {
    return (
        <li className="answer">
            <button id={id} className={className} onClick={onClick} disabled={disable !== null}>{children}</button>
        </li>
    );
}