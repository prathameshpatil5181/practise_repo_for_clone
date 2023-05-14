
function Cdeditor(){
    return(
        <>
            <div className="code-container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <select className="dropdown h5" value={selectedOption} onChange={handleOptionChange}>
                            <option value={selectedOption} key="1">{selectedOption}</option>
                            {
                                launguages.map(lang => {
                                    return (
                                        <option value={lang.language} key={lang.key}>{lang.language}</option>)
                                })}
                        </select>
                    </div>

                </nav>
                <div className="code">
                    <div className="codeText">
                        <div className="numbergrid">
                            {[...Array(rownos).keys()].map((i) => (
                                <div key={i} align="center">{i}</div>
                            ))}
                        </div>
                        <textarea className="Textarea" value={samplecode}
                                  onChange={handletextchange} ></textarea>
                    </div>
                    <button type="button" className="btn btn-primary to-end" onClick={() => {
                    }}>Submit
                    </button>
                </div>

            </div>


        </>

     );
}
export default Cdeditor;