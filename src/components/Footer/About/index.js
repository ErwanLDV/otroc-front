/* eslint-disable max-len */
import './style.scss';
import thomas from '../../../assets/images/avatars/NewThomas.jpg';
import richard from '../../../assets/images/avatars/R-Logo.jpg';
import yann from '../../../assets/images/avatars/TheWitcherDer.jpg';
import erwan from '../../../assets/images/avatars/lion.jpg';

function About() {
  return (
    <section>
      <h1 className="footer-h1"> A propos </h1>
      <p className="footer-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet cursus sit amet. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Ultrices gravida dictum fusce ut placerat orci nulla. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. In tellus integer feugiat scelerisque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Eget nunc scelerisque viverra mauris in. Pellentesque elit ullamcorper dignissim cras tincidunt. Ut sem viverra aliquet eget sit amet tellus cras. In metus vulputate eu scelerisque felis imperdiet. Feugiat pretium nibh ipsum consequat nisl vel. Amet volutpat consequat mauris nunc congue nisi vitae. Tempor nec feugiat nisl pretium fusce id velit ut. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Est sit amet facilisis magna etiam tempor orci. Aliquet porttitor lacus luctus accumsan. Mattis nunc sed blandit libero volutpat sed cras. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Amet nisl suscipit adipiscing bibendum.<br />
        <br />
        In cursus turpis massa tincidunt dui ut ornare lectus sit. Mauris vitae ultricies leo integer. Ut consequat semper viverra nam libero justo laoreet sit. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Vel pharetra vel turpis nunc eget. Venenatis tellus in metus vulputate eu scelerisque felis. Molestie ac feugiat sed lectus vestibulum mattis. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Aliquam sem fringilla ut morbi. Arcu odio ut sem nulla. Pretium nibh ipsum consequat nisl vel pretium. Nascetur ridiculus mus mauris vitae ultricies. Ut diam quam nulla porttitor massa id.<br />
      </p>
      <p className="productors-p"> A l'initiative de :</p>
      <div className="productors">
        <div className="productors-number">
          <div className="productors-itembulle"><img src={yann} alt="yann" /></div>
          <span className="productors-span"> Y.Lebouc</span>
        </div>
        <div className="productors-number">
          <div className="productors-itembulle"><img src={richard} alt="richard" /></div>
          <span className="productors-span"> R.Obremé</span>
        </div>
        <div className="productors-number">
          <div className="productors-itembulle"><img src={erwan} alt="erwan" /></div>
          <span className="productors-span"> E.Lable</span>
        </div>
        <div className="productors-number">
          <div className="productors-itembulle"><img src={thomas} alt="thomas" /></div>
          <span className="productors-span"> T.Salmon</span>
        </div>
      </div>
    </section>
  );
}

export default About;
