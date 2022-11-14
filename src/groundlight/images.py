import imghdr
import io


def buffer_from_jpeg_file(image_filename: str) -> io.BufferedReader:
    """
    Get a buffer from an jpeg image file.

    For now, we only support JPEG files, and raise an ValueError otherwise.
    """
    if imghdr.what(image_filename) == "jpeg":
        # Note this will get fooled by truncated binaries since it only reads the header.
        # That's okay - the server will catch it.
        return open(image_filename, "rb")
    else:
        raise ValueError("We only support JPEG files, for now.")
