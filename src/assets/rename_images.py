import os
from PIL import Image
from PIL.ExifTags import TAGS
from datetime import datetime

# Folder containing your photos
folder = '2022-08-05 Eugene & Flo Wedding'
folder = '2022-09-12 Gloria & Hao Engagement'
folder = '2022-02-22 Tyler & Jiayi Wedding'
def get_time_dimension(file_path):
    try:
        image = Image.open(file_path)
        exif_data = image._getexif()
        width, height = image.size
        orientation = 'horizontal' if width >= height else 'vertical'
        if not exif_data:
            return None, orientation
        for tag_id, value in exif_data.items():
            tag = TAGS.get(tag_id, tag_id)
            if tag == 'DateTimeOriginal':
                return datetime.strptime(value, '%Y:%m:%d %H:%M:%S'), orientation
    except Exception as e:
        print(f"Failed to read EXIF from {file_path}: {e}")
    return None, None

# Collect photos and their timestamps
photos_horizontal = []
photos_vertical = []
photos = []
for filename in os.listdir(folder):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png', 'webp')):
        path = os.path.join(folder, filename)
        dt, orientation = get_time_dimension(path)
        if orientation == 'horizontal':
            photos_horizontal.append((path, dt, orientation))
            photos.append((path, dt, orientation))
        elif orientation == 'vertical':
            photos_vertical.append((path, dt, orientation))
            photos.append((path, dt, orientation))

# Sort by EXIF datetime
try:
    # photos_horizontal.sort(key=lambda x: x[1])
    # photos_vertical.sort(key=lambda x: x[1])
    photos.sort(key=lambda x: x[1])
except Exception as e:
    print(f"Error sorting photos: {e}. No EXIF data available because photos are likely already sorted and converted. Quiting.")
    quit()

from multiprocessing import Pool, cpu_count

def process_photo(args):
    i, (path, dt, orientation) = args
    ext = '.webp'
    new_filename = f"{i:04d}-{orientation}{ext}"
    new_path = os.path.join(folder, new_filename)

    try:
        if not path.lower().endswith('.webp'):
            with Image.open(path) as img:
                img.save(new_path, 'WEBP', quality=100)
            os.remove(path)
            return f'✅ Converted: {path} → {new_path}'
        else:
            os.rename(path, new_path)
            return f'✅ Renamed: {path} → {new_path}'
    except Exception as e:
        return f'❌ Failed to process {path}: {e}'

if __name__ == '__main__':

    with Pool(processes=cpu_count()) as pool:
        # results = pool.map(process_photo, list(enumerate(photos_horizontal, start=1)))
        # print("Horizontal photos processed.")
        # results = pool.map(process_photo, list(enumerate(photos_vertical, start=1)))
        # print("Vertical photos processed.")

        results = pool.map(process_photo, list(enumerate(photos, start=1)))
        print("All photos processed.")
