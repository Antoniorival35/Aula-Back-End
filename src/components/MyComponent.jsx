import "./MyComponent.css";

const MyComponent = () => {
    return (
        <div>
        <h1>CSS de component</h1>
        <p>Este Parágrafo vai ter um estilo</p>
         <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "1px dotted blue",
        }}
      >
        Este elemento foi estilizado inline
      </p>
        </div>
    );
};
export default MyComponent;

