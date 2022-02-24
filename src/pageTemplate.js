import HeaderOfCategory from './headerOfCategory';
import Header from './header';
import Footer from './footer';


const PageTemplate = ({children, subjects=[]}) =>
        <div>
            <Header />
            <HeaderOfCategory subjects={subjects} />
            {children}
            <Footer />
        </div>


export default PageTemplate;