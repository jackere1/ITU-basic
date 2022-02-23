import java.io.*;
import java.nio.channels.*;

public class LockingExample {
    public static final boolean EXCLUSIVE = false;
    public static final boolean SHARED = true;

    public static void main(String args[]) throws IOException {
        FileLock sharedLock = null;
        FileLock exclusiveLock = null;

        try {
            RandomAccessFile raf = new RandomAccessFile("file.txt","rw");

            FileChannel ch = raf.getChannel();

            exclusiveLock = ch.lock(0, raf.length()/2, EXCLUSIVE);

            exclusiveLock.release();

            sharedLock = ch.lock(raf.length()/2+1,raf.length(),SHARED);

            sharedLock.release();

        }
        catch (java.io.IOException ioe) {
            System.err.println(ioe);
        }

        finally {
            if (exclusiveLock != null)
                exclusiveLock.release();
            if (sharedLock != null)
                sharedLock.release();
        }
    }
}