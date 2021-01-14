import './ContactTable.css';

// 数据，Render 责任分离
const DATA = [{
  key: 'age',
  title: 'Age',
  value: '20',
}, {
  key: 'residence',
  title: 'Residence',
  value: 'Gaia'
}, {
  key: 'address',
  title: 'Address',
  value: 'Level 3 / 57 Coronation Drive, Brisbane',
}, {
  key: 'email',
  title: 'Email',
  value: (
    <a href="mailto:info@jiangren.com.au">
      info@jiangren.com.au
    </a>
  ),
}, {
  key: 'phone',
  title: 'Phone',
  value: '+0123 123 456 789'
}];

const ContactTable = () => (
  <div>
    <table className="homepage__contact">
      <tbody>
        {DATA.map(({ key, title, value }) => (
          <tr key={key}>
            <td>{title}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ContactTable;
