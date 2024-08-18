import React from 'react';
import '../assets/global.scss'; // Ensure this path is correct and contains your styles

const ListItem = ({ icon, artist, name, index, data, selectedSong, setSelectedSong }) => {
    const isSelected = selectedSong.name === name;

    return (
        <div key={index} className={`list_item ${isSelected ? 'selected' : ''}`} onClick={() => setSelectedSong(data)}>
            <div>
                <img
                    src={`https://cms.samespace.com/assets/${data.cover}`} // Use 'data.cover' for image URL
                    alt={name} // Use song name for accessibility
                    width={48}
                    height={48}
                    style={{ borderRadius: '4px' }} // Optional: Add border-radius for better styling
                />
            </div>
            <div>
                <div className="song_name">{name}</div>
                <div className="artist_name">{artist}</div>
            </div>
        </div>
    );
};

export default ListItem;
