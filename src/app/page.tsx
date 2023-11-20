import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Content/HeroBanner/HeroBanner';
import Info from '@/components/Content/Info/Info';
import OnlinePayments from '@/components/Content/OnlinePayments/OnlinePayments';
import QRPayments from '@/components/Content/QRPayments/QRPayments';
import PaymentLink from '@/components/Content/Paymentlink/PaymentLink';
import MiniApps from '@/components/Content/MiniApps/MiniApps';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="">
      {/* <Navbar /> */}
      <Header />
      <Info />
      <OnlinePayments />
      <QRPayments />
      <MiniApps />
      <PaymentLink />
      {/* <Footer /> */}
    </main>
  );
}
