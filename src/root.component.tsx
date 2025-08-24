import Reportes from "./pages/Reportes";

export default function Root(props) {
    return (
        <div style={{padding: '2rem'}}>
            <Reportes/>
            <section>{props.name} is mounted!</section>
        </div>
    );
}