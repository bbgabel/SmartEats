import './Items.css';

export default function Profile({ image, name, text, role }) {
    return (
        <div className="profile-card">
            <div className="profile-top">
                <img src={image} alt={name} className="profile-avatar" />
                <div>
                    <p className="pill subtle">{role}</p>
                    <h4 className="profile-name">{name}</h4>
                </div>
            </div>
            <p className="profile-text">{text}</p>
        </div>
    );
}
