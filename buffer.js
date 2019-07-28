buf = new Buffer.alloc(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : " + len);
//The Buffer class was introduced as part of the Node.js API
//to enable interaction with octet streams in TCP streams,
//file system operations, and other contexts.
//more info:
//https://www.freecodecamp.org/news/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8/
//That “waiting area” is the buffer!
//It is a small physical location in your computer,
//usually in the RAM, where data are temporally gathered,
//wait, and are eventually sent out for processing during streaming.
