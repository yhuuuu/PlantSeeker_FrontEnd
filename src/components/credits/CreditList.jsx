import "./creditList.css"

function CreditList() {
  return (
    <div className="creditList-container container">
    <div className="row">
        <div className="col-md-12">
            <h4>Pl@ntNet API</h4>
            <a href="https://my.plantnet.org/">Plant identify API</a>
        </div>
        <div className="col-md-12">
            <h4>Perenual</h4>
            <a href="https://perenual.com/docs/api">Plant diseases API</a>
        </div>
        <div className="col-md-12">
            <h4>Flaticon</h4>
            <a href="https://www.flaticon.com/free-stickers/plant" title="plant stickers">Plant stickers created by Stickers - Flaticon</a>
            <br/>
            <a href="https://www.flaticon.com/free-animated-icons/nature" title="nature animated icons">Nature animated icons created by Freepik - Flaticon</a>
        </div>
    </div>
</div>
  )
}

export default CreditList