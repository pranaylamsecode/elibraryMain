<?php

namespace App\Http\Controllers;

use App\Exceptions\ApiOperationFailedException;
use App\Models\ResourceCategoryModel;
use App\Models\ResourceModel;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class ResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public static function makeAttachment($file, $path, $disk)
    {
        try {
            $fileName = '';
            if (!empty($file)) {
                $extension = $file->getClientOriginalExtension();
                // if (!in_array(strtolower($extension), ['pdf', 'doc', 'docx', 'txt', 'jpg', 'png', 'jpeg', 'mp3', 'mp4'])) {
                //     throw new ApiOperationFailedException('Invalid Attachment', Response::HTTP_BAD_REQUEST);
                // }
                $originalName = $file->getClientOriginalName();
                // $date = Carbon::now()->format('Y-m-d');
                // $originalName = sha1($originalName . time());
                $fileName = $originalName;
                $contents = file_get_contents($file->getRealPath());
                Storage::disk($disk)->put($path . DIRECTORY_SEPARATOR . $fileName, $contents);
            }

            return $fileName;
        } catch (Exception $e) {
            throw new ApiOperationFailedException($e->getMessage(), $e->getCode());
        }
    }

    public function index(Request $request)
    {
        try {
            if (!empty($request->search)) {
                return response()->json([
                    'data' => ResourceModel::where('title', 'LIKE', '%' . $request->search . '%')->get(),
                    'message' => "Resources Fetched successfully"
                ]);
            }
            return response()->json([
                'data' => ResourceModel::all(),
                'message' => "Resources Fetched successfully"
            ]);
        } catch (Exception $error) {
            return response()->json([
                'data' => $error->getMessage(),
                'message' => $error->getMessage()
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {
            $category = json_decode($request->category);
            if (!empty($category->__isNew__)) {
                $category_id = ResourceCategoryModel::create(["name" => $category->value])->toArray();
                $data['category_id'] = $category_id['id'];
            } else {
                $data['category_id'] = $category->value;
            }
            $data['title'] = $request->title;
            $data['note'] = $request->note;
            $data['url'] = $request->url;

            if ($request->file('file_content')) {
                $fileName = $this->makeAttachment(
                    $request['file_content'],
                    "Resources",
                    config('app.media_disc')
                );
                $data["file_content"] = $fileName;
            }
            $resource = ResourceModel::create($data);
            return response()->json([
                'data' => $resource,
                'message' => "Resources added successfully"
            ]);
        } catch (Exception $error) {
            return response()->json([
                'data' => $error->getMessage(),
                'message' => $error->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            if (ResourceModel::where('id', '=', $id)->exists()) {

                $resource = ResourceModel::where('id', $id)->get()->toArray();
                $file = $resource[0]['file_content'];
                // $temp_arr = explode('_', $file);
                // if (isset($temp_arr[0])) unset($temp_arr[0]);
                // $file = implode('_', $temp_arr);
                $finalPath = public_path("uploads/Resources/") . $file;
                if (file_exists($finalPath)) {
                    if (unlink($finalPath)) {
                        ResourceModel::whereId($id)->delete();
                    }
                } else {
                    ResourceModel::whereId($id)->delete();
                }
                return response()->json([
                    'data' => 'Resource Deleted Successfully.'
                ]);
            }
        } catch (Exception $error) {
            return response()->json([
                'data' => $error->getMessage(),
                'message' => $error->getMessage()
            ]);
        }
    }
}
