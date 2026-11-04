class customError extends Error
{
    constructor(statusCode,message,name)
    {
        super(message);
        this.statusCode=statusCode;
        this.name = name;
    }
}

export default customError;